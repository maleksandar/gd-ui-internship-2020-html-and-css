import { Component, OnInit, Input, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';
import { TasksService } from '../services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { transferArrayItem, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() status: TaskStatus;

  constructor(public dialog: MatDialog, public tasksService: TasksService) {}

  ngOnInit(): void {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data : {
        title: "",
        description: "",
        buttonType: "ADD",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.buttonType === "SAVE") {
          this.tasksService.addTask(result.title, result.description);
        }
      } 
    })
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.tasksService.storeTasks();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.tasksService.storeTasks();
      }
  }

}
