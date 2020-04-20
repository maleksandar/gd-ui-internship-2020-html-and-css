import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trello-modal',
  templateUrl: './trello-modal.component.html',
  styleUrls: ['./trello-modal.component.scss']
})
export class TrelloModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TrelloModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; text: string; }) {
  }

  ngOnInit(): void {

  }

  onClose(): void {
    this.dialogRef.close();
  }

  onInputChange(field: string, input: string): void {
    this.data[field] = input.trim();
  }
}
