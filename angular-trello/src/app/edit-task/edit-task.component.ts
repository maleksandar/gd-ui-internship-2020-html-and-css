import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() description: string;

  @Output('editedTitle') editedTitle: EventEmitter<string>;
  @Output('editedDesc') editedDesc: EventEmitter<string>;

  constructor(private todoService: TodoServiceService) {
    this.editedTitle = new EventEmitter<string>();
    this.editedDesc = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  onEditTask(title, desc) {
    if (title === '') {
      window.alert('Unesite title');
      return;
    }

    if (desc === '') {
      window.alert('Unesite description');
      return;
    }

    this.editedTitle.emit(title);
    this.editedDesc.emit(desc);
  }
}
