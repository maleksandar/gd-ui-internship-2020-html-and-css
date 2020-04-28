import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TrelloDialogComponent } from '../trello-dialog/trello-dialog.component';
import { TrelloCardService } from '../../services/trello-card.service';

@Component({
  selector: 'app-trello-task',
  templateUrl: './trello-task.component.html',
  styleUrls: ['./trello-task.component.scss']
})
export class TrelloTaskComponent implements OnInit {
  @Input() task: Task;
  @Input() listId: string;
  constructor(
    private dialog: MatDialog,
    private trelloService: TrelloCardService
  ) { }

  ngOnInit(): void {
  }

  deleteTask() {
    this.trelloService.removeTask(this.listId, this.task);
  }
  openDialog() {
    const data = {
      listId: this.listId,
      task: this.task,
      dialogType: 'edit'
    }
    this.dialog.open(TrelloDialogComponent, {data: data});
  }
}
