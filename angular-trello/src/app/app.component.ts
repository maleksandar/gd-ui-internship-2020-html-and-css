import { Component } from '@angular/core';
import { Task } from './models/tasks.model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public toDo: Task[];
  public inProgress: Task[];
  public done: Task[];

  constructor(private taskService: TasksService) {
    this.toDo = this.taskService.getTasksWithKey('TODO');
    this.inProgress = this.taskService.getTasksWithKey('INPROGRESS');
    this.done = this.taskService.getTasksWithKey('DONE');
  }
}
