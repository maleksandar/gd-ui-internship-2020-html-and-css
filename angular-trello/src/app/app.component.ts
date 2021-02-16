import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TasksService]
})
export class AppComponent {
  title = 'angular-trello';

  public toDo: Task[]; inProgress: Task[]; done: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.toDo = this.tasksService.getTasksWithStatus('TODO');
    this.inProgress = this.tasksService.getTasksWithStatus('IN PROGRESS');
    this.done = this.tasksService.getTasksWithStatus('DONE');
  }

}
