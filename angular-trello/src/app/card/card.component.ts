import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() task: Task;
  @Input() status: TaskStatus; 

  constructor() { }

  ngOnInit(): void {
  }

}
