import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from 'src/app/models/taskList.model';
import { TrelloService } from "../../services/trello.service";
import { Task } from 'src/app/models/task.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Subscription } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { TrelloDialogComponent } from '../trello-dialog/trello-dialog.component';
@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloListComponent implements OnInit {
  @Input() list: TaskList;
  listTasks: Task[];
  private subscription: Subscription;

  constructor(private trelloService: TrelloService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listTasks = this.getTasksFromIds(this.list)
    this.subscription = this.trelloService.tasksChanged
      .subscribe(
        (lists: {[path:string]: TaskList}) => {
          this.listTasks = this.getTasksFromIds(lists[this.list.id])
        }
      );
  }

  getTasksFromIds(list) {
    const allTasks = this.trelloService.get('tasks');
    return list.taskIds.map(taskId => allTasks[taskId]);
  }

  drop(event: CdkDragDrop<string[]>){
    this.trelloService.moveTaskOnDrop(event);
  }

  openDialog() {
    const task = new Task('', '', '');
    const data = {
      listId: this.list.id,
      task: task,
      dialogType: 'add'
    }
    this.dialog.open(TrelloDialogComponent, {data: data});

  }
}
