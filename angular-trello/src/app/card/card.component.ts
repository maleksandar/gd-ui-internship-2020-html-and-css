import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() task: Task;
  @Input() status: TaskStatus; 

  constructor(public dialog: MatDialog, private tasksServis: TasksService) { }

  ngOnInit(): void {}

  onDeleteButtonClick() {
    this.tasksServis.deleteTask(this.task.id, this.status);
  }

}
