import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      title: string;
      description: string;
      status: string;
    },
    public dialogRef: MatDialogRef<EditDialogComponent>,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {}

  closeEditDialog() {
    this.dialogRef.close();
  }

  onHandleDelete() {
    this.taskService.deleteTask(this.data.status, this.data.id);
    this.dialogRef.close();
  }

  onHandleSave() {
    this.taskService.editTask(
      this.data.id,
      this.data.title,
      this.data.description,
      this.data.status
    );
    this.dialogRef.close();
  }
}
