import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() description: string;

  @Output('deleteTaskWithSelectedTitle')
  public selectedTitle: EventEmitter<string>;

  @Output('selectId')
  public selectId: EventEmitter<number>;

  constructor() {
    this.selectedTitle = new EventEmitter<string>();
    this.selectId = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  sendIdOfSelectedTask() {
    this.selectId.emit(this.id);
  }

  onDeleteTask(): void {
    this.selectedTitle.emit(this.title);
  }
}
