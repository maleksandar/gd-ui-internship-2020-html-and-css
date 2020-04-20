import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  // templateUrl: 'trello-modal.component.html',
  styleUrls: ['./trello-modal.component.scss']
})
export class DialogOverviewComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onInputChange(field: string, input: string): void {
    this.data[field] = input.trim();
  }
}

export interface DialogData {
  title: string;
  text: string;
}
