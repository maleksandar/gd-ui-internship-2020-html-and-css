import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() task: Task;
  @Input() status: string;

  constructor(public dialog: MatDialog, private taskService: TasksService) {}

  ngOnInit(): void {}

  openEditDiallg() {
    let dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        id: this.task.id,
        title: this.task.text,
        description: this.task.description,
        status: this.status,
      },
    });
  }

  onHandleDelete() {
    this.taskService.deleteTask(this.status, this.task.id);
  }
}
