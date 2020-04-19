import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';
import { StoreService } from './store.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks;

  constructor(private storeService: StoreService) {
    this.tasks = storeService.getData();
  }

  public getTasksWithStatus(status: string): Task[] {
    return this.tasks[status];
  }

  public addTask(title: string, description: string): void {
    this.tasks["TODO"].push({
      id: uuidv4(),
      title: title,
      description: description
    })

    this.storeService.storeData();
  }

  public deleteTask(id: number, status: TaskStatus): void {
    let indexOfTask = this.tasks[status].findIndex(task => task.id === id);
    this.tasks[status].splice(indexOfTask, 1);

    this.storeService.storeData();
  }

  public editTask(id: number, status: TaskStatus, title: string, description: string): void {
    const indexOfTask = this.tasks[status].findIndex(task => task.id === id);
    this.tasks[status][indexOfTask].title = title;
    this.tasks[status][indexOfTask].description = description;

    this.storeService.storeData();
  }

  public storeTasks() {
    this.storeService.storeData();
  }
}

