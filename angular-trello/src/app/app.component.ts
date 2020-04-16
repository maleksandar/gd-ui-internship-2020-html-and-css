import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ToDo } from './models/todo.model';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: ToDo[] = this.todoService.getTodoTasks();
  inProgresses: ToDo[] = this.todoService.getInProgressTasks();
  dones: ToDo[] = this.todoService.getDoneTasks();

  id: number;
  title: string;
  description: string;

  constructor(private todoService: TodoServiceService) {}

  selectIdOfTask(id: number) {
    for (let i = 0; i < this.todos.length; i++) {
      if (id === this.todos[i].getIndex()) {
        this.title = this.todos[i].getTitle();
        this.description = this.todos[i].getDesc();
        this.id = id;

        break;
      }
    }

    for (let i = 0; i < this.inProgresses.length; i++) {
      if (id === this.inProgresses[i].getIndex()) {
        this.title = this.inProgresses[i].getTitle();
        this.description = this.inProgresses[i].getDesc();
        this.id = id;

        break;
      }
    }

    for (let i = 0; i < this.dones.length; i++) {
      if (id === this.dones[i].getIndex()) {
        this.title = this.dones[i].getTitle();
        this.description = this.dones[i].getDesc();
        this.id = id;

        break;
      }
    }
  }

  editTitleOfTask(title) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.id === this.todos[i].getIndex()) {
        this.todos[i].setTitle(title);
        break;
      }
    }

    for (let i = 0; i < this.inProgresses.length; i++) {
      if (this.id === this.inProgresses[i].getIndex()) {
        this.inProgresses[i].setTitle(title);
        break;
      }
    }

    for (let i = 0; i < this.dones.length; i++) {
      if (this.id === this.dones[i].getIndex()) {
        this.dones[i].setTitle(title);
        break;
      }
    }
  }

  editDescriptionOfTask(desc) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.id === this.todos[i].getIndex()) {
        this.todos[i].setDesc(desc);
        break;
      }
    }

    for (let i = 0; i < this.inProgresses.length; i++) {
      if (this.id === this.inProgresses[i].getIndex()) {
        this.inProgresses[i].setDesc(desc);
        break;
      }
    }

    for (let i = 0; i < this.dones.length; i++) {
      if (this.id === this.dones[i].getIndex()) {
        this.dones[i].setDesc(desc);
        break;
      }
    }
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
