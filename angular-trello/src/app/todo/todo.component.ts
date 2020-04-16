import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() description: string;

  @Output('selectId')
  public selectId: EventEmitter<number>;

  constructor(private todoService: TodoServiceService) {
    this.selectId = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  sendIdOfSelectedTask() {
    this.selectId.emit(this.id);
  }

  onDeleteTask(title): void {
    this.todoService.deleteTodoTask(title);
  }
}
