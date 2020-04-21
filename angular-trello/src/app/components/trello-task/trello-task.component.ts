import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-trello-task',
  templateUrl: './trello-task.component.html',
  styleUrls: ['./trello-task.component.scss']
})
export class TrelloTaskComponent implements OnInit {
  @Input() task: Task;
  constructor() { }

  ngOnInit(): void {
  }

}
