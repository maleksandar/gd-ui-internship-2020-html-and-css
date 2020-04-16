import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from './models/task.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TasksService]
})
export class AppComponent {
  public toDo: Task[]; inProgress: Task[]; done: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.toDo = this.tasksService.getTasksWithStatus('TODO');
    this.inProgress = this.tasksService.getTasksWithStatus('IN-PROGRESS');
    this.done = this.tasksService.getTasksWithStatus('DONE');
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      console.log("lala");
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("tralala");
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  // ngOnDestroy(): void {
  //   this.tasksService.storeTasks();
  // }

}
