import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ToDo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: ToDo[] = [];
  inProgresses: ToDo[] = [];
  dones: ToDo[] = [];

  constructor() {
    this.todos.push(new ToDo(0, 'title1', 'desc1'));
    this.todos.push(new ToDo(1, 'title2', 'desc2'));
    this.inProgresses.push(new ToDo(2, 'title3', 'desc3'));
    this.dones.push(new ToDo(3, 'title4', 'desc4'));
  }

  id:number;
  title:string;
  description:string;

  onNewTask(noviToDo: ToDo) {
    this.todos.push(noviToDo);
  }

  selectIdOfToDoTask(id:number){
    for (let i = 0; i < this.todos.length; i++) {
      if (id === this.todos[i].getIndex()) {
        this.title=this.todos[i].getTitle();
        this.description=this.todos[i].getDesc();
        this.id=id;
      }
    }
  }

  selectIdOfInProgressTask(id:number){
    for (let i = 0; i < this.inProgresses.length; i++) {
      if (id === this.inProgresses[i].getIndex()) {
        this.title=this.inProgresses[i].getTitle();
        this.description=this.inProgresses[i].getDesc();
        this.id=id;
      }
    }
  }

  selectIdOfDoneTask(id:number){
    for (let i = 0; i < this.dones.length; i++) {
      if (id === this.dones[i].getIndex()) {
        this.title=this.dones[i].getTitle();
        this.description=this.dones[i].getDesc();
        this.id=id;
      }
    }
  }

  editTitleOfToDoTask(title){
    for (let i = 0; i < this.todos.length; i++) {
      if (this.id === this.todos[i].getIndex()) {
        this.todos[i].setTitle(title);
      }
    }
  }

  editTitleOfInProgressTask(title){
    for (let i = 0; i < this.inProgresses.length; i++) {
      if (this.id === this.inProgresses[i].getIndex()) {
        this.inProgresses[i].setTitle(title);
      }
    }
  }

  editTitleOfDoneTask(title){
    for (let i = 0; i < this.dones.length; i++) {
      if (this.id === this.dones[i].getIndex()) {
        this.dones[i].setTitle(title);
      }
    }
  }

  editDescriptionOfToDoTask(desc){
    for (let i = 0; i < this.todos.length; i++) {
      if (this.id === this.todos[i].getIndex()) {
        this.todos[i].setDesc(desc);
      }
    }
  }

  editDescriptionOfInprogressTask(desc){
    for (let i = 0; i < this.inProgresses.length; i++) {
      if (this.id === this.inProgresses[i].getIndex()) {
        this.inProgresses[i].setDesc(desc);
      }
    }
  }

  editDescriptionOfDoneTask(desc){
    for (let i = 0; i < this.dones.length; i++) {
      if (this.id === this.dones[i].getIndex()) {
        this.dones[i].setDesc(desc);
      }
    }
  }

  deleteToDoTask(brisiTodo: string) {
    for (let i = 0; i < this.todos.length; i++) {
      if (brisiTodo === this.todos[i].getTitle()) {
        this.todos.splice(i, 1);
      }
    }
  }

  deleteInProgressTask(brisiTodo: string) {
    for (let i = 0; i < this.inProgresses.length; i++) {
      if (brisiTodo === this.inProgresses[i].getTitle()) {
        this.inProgresses.splice(i, 1);
      }
    }
  }

  deleteDoneTask(brisiTodo: string) {
    for (let i = 0; i < this.dones.length; i++) {
      if (brisiTodo === this.dones[i].getTitle()) {
        this.dones.splice(i, 1);
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
