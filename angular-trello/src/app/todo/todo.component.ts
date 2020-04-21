import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() status: string;

  @Output('selectId')
  public selectId: EventEmitter<number>;

  constructor(private todoService: TodoServiceService) {
    this.selectId = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  sendIdOfSelectedTask() {
    this.selectId.emit(this.id);
  }

  onDeleteTask(): void {
    let localStorageKey = this.status + this.id;
    this.todoService.deleteTask(this.id, this.status);
    this.todoService.removeFromLocaleStorage(localStorageKey);
  }
}
