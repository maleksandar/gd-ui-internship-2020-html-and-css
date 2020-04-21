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
  todos: ToDo[] = this.todoService.getTasks('todo');
  inProgress: ToDo[] = this.todoService.getTasks('inprogress');
  dones: ToDo[] = this.todoService.getTasks('done');

  id: number;
  title: string;
  description: string;

  constructor(private todoService: TodoServiceService) {}

  whatArrayToUse(id) {
    let array;
    let todoKeys = Object.keys(this.todos);
    let inProgressKeys = Object.keys(this.inProgress);

    if (todoKeys.indexOf(id.toString()) !== -1) {
      array = this.todos;
    } else if (inProgressKeys.indexOf(id.toString()) !== -1) {
      array = this.inProgress;
    } else {
      array = this.dones;
    }

    return array;
  }

  selectIdOfTask(id: number) {
    let array = this.whatArrayToUse(id);
    for (let i = 0; i < array.length; i++) {
      if (id === array[i].getIndex()) {
        this.title = array[i].getTitle();
        this.description = array[i].getDesc();
        this.id = id;
        break;
      }
    }
  }

  editTitleOfTask(title) {
    let array = this.whatArrayToUse(this.id);

    for (let i = 0; i < array.length; i++) {
      if (this.id === array[i].getIndex()) {
        array[i].setTitle(title);
        break;
      }
    }
  }

  editDescriptionOfTask(desc) {
    let array = this.whatArrayToUse(this.id);

    for (let i = 0; i < array.length; i++) {
      if (this.id === array[i].getIndex()) {
        array[i].setDesc(desc);
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
    if (event.container.data === this.inProgress) {
      for (let i = 0; i < event.container.data.length; i++) {
        if (event.currentIndex === i) {
          this.todoService.removeFromLocaleStorage(
            'todo' + event.container.data[i].getIndex()
          );
        }
        this.todoService.saveTasksToLocalStorage(
          event.container.data[i],
          'inprogress'
        );
      }
    } else if (event.container.data === this.dones) {
      for (let i = 0; i < event.container.data.length; i++) {
        if (event.currentIndex === i) {
          this.todoService.removeFromLocaleStorage(
            'inprogress' + event.container.data[i].getIndex()
          );
        }
        this.todoService.saveTasksToLocalStorage(
          event.container.data[i],
          'done'
        );
      }
    }
  }
}
