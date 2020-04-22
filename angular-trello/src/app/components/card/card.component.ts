import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskStatus } from '../../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() task: Task;
  @Input() status: TaskStatus; 

  constructor(public dialog: MatDialog, private tasksService: TasksService) { }

  ngOnInit(): void {}

  onDeleteButtonClick() {
    this.tasksService.deleteTask(this.task.id, this.status);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data : {
        title: this.task.title,
        description: this.task.description,
        buttonType: "EDIT",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.buttonType === "SAVE") {
          this.tasksService.editTask(this.task.id, this.status, result.title, result.description);
        } else if (result.buttonType === "DELETE") {
          this.tasksService.deleteTask(this.task.id, this.status);
        }
      }
    })
  }

}
