import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { Task } from '../models/tasks.model';
import { uuid } from 'uuidv4';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks;
  isFormOpen: boolean = false;

  constructor(private storeService: StoreService) {
    this.tasks = storeService.getData();
  }

  public getTasksWithKey(key: string): Task[] {
    return this.tasks[key];
  }

  public deleteTask(key, id) {
    const taskToDelete = this.tasks[key].findIndex((task) => task.id === id);
    this.tasks[key].splice(taskToDelete, 1);
    this.storeService.storeData();
  }

  public addTask(title, description) {
    this.tasks['TODO'].push(new Task(uuid(), title, description));
    this.storeService.storeData();
  }

  public editTask(id, title, description, key) {
    const taskToEdit = this.tasks[key].find((task) => task.id === id);
    taskToEdit.text = title;
    taskToEdit.description = description;
    this.storeService.storeData();
  }
}
