import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks;
  private id: number = 0;

  constructor() {
    let data = window.localStorage.getItem('data');
    this.tasks = (data ? JSON.parse(data) : {})
    if(!this.tasks["TODO"]) {
      this.tasks["TODO"] = []
    }
    if(!this.tasks["IN-PROGRESS"]) {
      this.tasks["IN-PRGRESS"] = []
    }
    if(!this.tasks["DONE"]) {
      this.tasks["DONE"] = []
    }   

    // what is id?
  }

  public getTasksWithStatus(status: string): Task[] {
    return this.tasks[status];
  }

  public addTask(title: string, description: string): void {
    this.tasks["TODO"].push({
      id: this.id,
      title: title,
      description: description
    })

    this.id++;

    this.storeTasks();
  }

  public storeTasks() {
    localStorage.setItem('data', JSON.stringify(this.tasks));
  }
}

