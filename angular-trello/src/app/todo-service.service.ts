import { Injectable } from '@angular/core';
import { ToDo } from './models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos: ToDo[] = [];
  inProgress: ToDo[] = [];
  dones: ToDo[] = [];
  allTasks: ToDo[] = [];

  tasks: ToDo[];

  id: number;
  title: string;
  description: string;

  constructor() {
    this.getLocalStorageItems();

    this.allTasks = this.allTasks.concat(
      this.todos,
      this.inProgress,
      this.dones
    );
  }

  getNextId() {
    return this.allTasks.length;
  }

  saveTasksToLocalStorage(todoItem, status) {
    var key = status + todoItem.id;
    var item = JSON.stringify(todoItem);
    localStorage.setItem(key, item);
  }

  getLocalStorageItems() {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.substring(0, 4) == 'todo') {
        this.pushItemToLocalStorage(this.todos, key);
      } else if (key.substring(0, 10) == 'inprogress') {
        this.pushItemToLocalStorage(this.inProgress, key);
      } else {
        this.pushItemToLocalStorage(this.dones, key);
      }
    }
  }

  pushItemToLocalStorage(array, key) {
    var item = localStorage.getItem(key);
    var todoItem = JSON.parse(item);
    array.push(new ToDo(todoItem.id, todoItem.title, todoItem.description));
  }

  removeFromLocaleStorage(key) {
    localStorage.removeItem(key);
  }

  onNewTask(noviToDo: ToDo) {
    this.todos.push(noviToDo);
  }

  getTasks(status) {
    switch (status) {
      case 'todo':
        return this.todos;
        break;
      case 'inprogress':
        return this.inProgress;
        break;
      case 'done':
        return this.dones;
        break;
      default:
        return [];
        break;
    }
  }

  deleteTask(id: number, status: string) {
    let todoKeys = Object.keys(this.todos);
    let inProgressKeys = Object.keys(this.inProgress);
    let doneKeys = Object.keys(this.dones);

    if (status === 'todo') {
      let indexOf = todoKeys.indexOf(id.toString());
      this.todos.splice(indexOf, 1);
    } else if (status === 'inprogress') {
      let indexOf = inProgressKeys.indexOf(id.toString());
      this.inProgress.splice(indexOf, 1);
    } else {
      let indexOf = doneKeys.indexOf(id.toString());
      this.dones.splice(indexOf, 1);
    }
  }
}
