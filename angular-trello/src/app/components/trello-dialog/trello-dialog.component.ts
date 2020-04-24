import { Component, OnInit, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Task } from 'src/app/models/task.model';
import { TrelloService } from '../../services/trello.service';
@Component({
  selector: 'app-trello-dialog',
  templateUrl: './trello-dialog.component.html',
  styleUrls: ['./trello-dialog.component.scss']
})
export class TrelloDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private trelloService: TrelloService
  ) { }

  ngOnInit(): void {
    
  }
  handleDelete() {
    this.trelloService.removeTask(
      this.data.listId,
      this.data.task
    );
  }
  
  handleSave() {
    if(this.data.dialogType === 'add') {
      this.trelloService.addTask(
        this.data.listId, 
        this.data.task
      );
    } else {
      this.trelloService.updateTask(
        this.data.task
      );
    }
  }
}
