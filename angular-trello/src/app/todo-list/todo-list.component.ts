import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() tasks: ToDo[];

  @Output('deleteTask')
  selectedTask: EventEmitter<string>;

  @Output('selectId')
  selectId: EventEmitter<number>;

  constructor() {
    this.selectedTask = new EventEmitter<string>();
    this.selectId = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  onDeleteTask(selectedTask: string) {
    this.selectedTask.emit(selectedTask);
  }

  sendIdOfSelectedTask(id: number) {
    this.selectId.emit(id);
  }
}
