import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() tasks: ToDo[];

  @Output('selectId')
  selectId: EventEmitter<number>;

  constructor() {
    this.selectId = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  sendIdOfSelectedTask(id: number) {
    this.selectId.emit(id);
  }
}
