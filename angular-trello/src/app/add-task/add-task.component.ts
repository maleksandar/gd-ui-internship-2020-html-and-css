import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  public title: string;
  public description: string;
  public id: number = this.todoService.getNextId();

  constructor(private todoService: TodoServiceService) {
    this.title = '';
    this.description = '';
  }

  ngOnInit(): void {}

  onAddTask(): void {
    if (this.title === '') {
      window.alert('Unesite title');
      return;
    }

    if (this.description === '') {
      window.alert('Unesite description');
      return;
    }

    const newTask = new ToDo(this.id, this.title, this.description);
    this.id++;
    this.todoService.onNewTask(newTask);

    localStorage.setItem(this.id.toString(), JSON.stringify(newTask));

    this.title = '';
    this.description = '';
  }
}
