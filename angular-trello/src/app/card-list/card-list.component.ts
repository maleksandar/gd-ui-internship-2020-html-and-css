import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';
import { TasksService } from '../services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() status: TaskStatus;

  constructor(public dialog: MatDialog, public tasksService: TasksService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    console.log("here I am");
    let dialogRef = this.dialog.open(DialogComponent, {
      data : {
        title: "",
        description: ""
      }
    });

    dialogRef.afterClosed().subscribe(task => {
      this.tasksService.addTask(task.title, task.description);
    })
  }

}
