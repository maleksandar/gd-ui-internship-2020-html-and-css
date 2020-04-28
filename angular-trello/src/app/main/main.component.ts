import { listEntry as Task } from './../models/listEntry.model';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  //Icons
  faTrash = faTrash;
  faEdit = faEdit;
  //

  toDo: Array<Task>;
  inProgress: Array<Task>;
  done: Array<Task>;

  newTaskModal = false;
  editTaskModal = false;
  modalOverlay = false;

  newTaskTitle = '';
  newTaskContent = '';
  test = 'test';

  editTaskTitle = '';
  editTaskContent = '';
  editTasklist;
  editTaskIndex;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('toDo')) {
      this.toDo = JSON.parse(localStorage.getItem('toDo'));
    } else {
      this.toDo = new Array<Task>();
    }

    if (localStorage.getItem('inProgress')) {
      this.inProgress = JSON.parse(localStorage.getItem('inProgress'));
    } else {
      this.inProgress = new Array<Task>();
    }

    if (localStorage.getItem('done')) {
      this.done = JSON.parse(localStorage.getItem('done'));
    } else {
      this.done = new Array<Task>();
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
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

    this.updateLocalStorage();
  }
  updateLocalStorage() {
    localStorage.setItem('toDo', JSON.stringify(this.toDo));
    localStorage.setItem('inProgress', JSON.stringify(this.inProgress));
    localStorage.setItem('done', JSON.stringify(this.done));
  }

  toggleNewTaskModal() {
    this.newTaskModal = this.newTaskModal ? false : true;
    this.toggleModalOverlay();
    this.clearNewTaskText();
  }

  toggleModalOverlay() {
    this.modalOverlay = this.modalOverlay ? false : true;
  }

  createNewTask() {
    let newTask = new Task();
    newTask.title = this.newTaskTitle;
    newTask.description = this.newTaskContent;

    newTask.descriptionShort = this.shortenDescription(newTask.description);

    this.toDo.push(newTask);
    this.toggleNewTaskModal();
    this.updateLocalStorage();
  }

  clearNewTaskText() {
    this.newTaskTitle = '';
    this.newTaskContent = '';
  }

  openEditTask(list, index) {
    this.editTaskTitle = list[index].title;
    this.editTaskModal = true;
    this.editTaskContent = list[index].description;
    this.editTasklist = list;
    this.editTaskIndex = index;
    this.toggleModalOverlay();
  }

  deleteTask(list, index) {
    list.splice(index, 1);
    this.updateLocalStorage();
  }

  saveEditedTask() {
    this.editTasklist[this.editTaskIndex].title = this.editTaskTitle;
    this.editTasklist[this.editTaskIndex].description = this.editTaskContent;
    this.editTasklist[
      this.editTaskIndex
    ].descriptionShort = this.shortenDescription(this.editTaskContent);
    this.updateLocalStorage();
    this.editTaskModal = false;
  }

  shortenDescription(description) {
    return description.length < 200
      ? description
      : description.substr(0, 200) + '...';
  }

  disableSaveNew() {
    return this.newTaskTitle.length === 0 || this.newTaskContent.length === 0;
  }

  disableSaveEdit() {
    return this.editTaskTitle.length === 0 || this.editTaskContent.length === 0;
  }
}
