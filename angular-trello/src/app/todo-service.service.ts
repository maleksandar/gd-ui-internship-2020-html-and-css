import { Injectable } from '@angular/core';
import { ToDo } from './models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos: ToDo[] = [];
  inProgresses: ToDo[] = [];
  dones: ToDo[] = [];
  allTasks: ToDo[] = [];

  id: number;
  title: string;
  description: string;

  constructor() {
    this.todos.push(new ToDo(0, 'title1', 'desc1'));
    this.todos.push(new ToDo(1, 'title2', 'desc2'));
    this.inProgresses.push(new ToDo(2, 'title3', 'desc3'));
    this.dones.push(new ToDo(3, 'title4', 'desc4'));

    this.allTasks = this.allTasks.concat(
      this.todos,
      this.inProgresses,
      this.dones
    );

    console.log(this.todos);
  }

  onNewTask(noviToDo: ToDo) {
    this.todos.push(noviToDo);
  }

  getNextId(){
    return this.allTasks.length;
  }

  getTodoTasks() {
    return this.todos;
  }

  getInProgressTasks() {
    return this.inProgresses;
  }

  getDoneTasks() {
    return this.dones;
  }

  deleteTodoTask(title: string) {
    for (let i = 0; i < this.todos.length; i++) {
      if (title === this.todos[i].getTitle()) {
        this.todos.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < this.inProgresses.length; i++) {
      if (title === this.inProgresses[i].getTitle()) {
        this.inProgresses.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < this.dones.length; i++) {
      if (title === this.dones[i].getTitle()) {
        this.dones.splice(i, 1);
        break;
      }
    }
  }
}
