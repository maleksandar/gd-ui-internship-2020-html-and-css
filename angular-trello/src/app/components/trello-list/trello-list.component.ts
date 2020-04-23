import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from 'src/app/models/taskList.model';
import { TrelloService } from "../../services/trello.service";
import { Task } from 'src/app/models/task.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloListComponent implements OnInit {
  @Input() list: TaskList;
  listTasks: Task[];
  private subscription: Subscription;

  constructor(private storageService: TrelloService) { }

  ngOnInit(): void {
    this.listTasks = this.getTasksFromIds(this.list)
    this.subscription = this.storageService.taskOrderChanged
      .subscribe(
        (lists: {[path:string]: TaskList}) => {
          this.listTasks = this.getTasksFromIds(lists[this.list.id])
        }
      );
  }
  getTasksFromIds(list) {
    const allTasks = this.storageService.get('tasks');
    return list.taskIds.map(taskId => allTasks[taskId]);
  }

  drop(event: CdkDragDrop<string[]>){
    this.storageService.moveTaskOnDrop(event);
  }
  
}
