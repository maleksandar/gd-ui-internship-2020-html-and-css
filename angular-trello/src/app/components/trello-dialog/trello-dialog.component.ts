import { Component, OnInit, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Task } from 'src/app/models/task.model';
import { TrelloCardService } from '../../services/trello-card.service';
@Component({
  selector: 'app-trello-dialog',
  templateUrl: './trello-dialog.component.html',
  styleUrls: ['./trello-dialog.component.scss']
})
export class TrelloDialogComponent implements OnInit {
  task: Task;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private trelloCardService: TrelloCardService
  ) { 
    this.task = { ...this.data.task };
  }

  ngOnInit(): void {
    
  }
  handleDelete() {
    this.trelloCardService.removeTask(
      this.data.listId,
      this.data.task
    );
  }
  
  handleSave() {
    if(this.data.dialogType === 'add') {
      this.trelloCardService.addTask(
        this.data.listId, 
        this.task
      );
    } else {
      this.trelloCardService.updateTask(
        this.task
      );
    }
  }
}
