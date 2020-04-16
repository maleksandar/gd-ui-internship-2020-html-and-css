import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() status: TaskStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
