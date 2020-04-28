import { Injectable } from '@angular/core';
import { TaskList } from '../models/taskList.model';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { StorageService } from './storage.service'
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';


@Injectable({
  providedIn: 'root'
})
export class TrelloCardService {
  tasksChanged = new Subject<{[path:string]: TaskList}>();
  private lists: {[path: string]: TaskList};
  private tasks: {[path: string]: Task};

  constructor(private storage: StorageService) {
    this.lists = this.storage.get('listKeys');
    this.tasks = this.storage.get('taskKeys');
  }
  
  get(key){
    return {...this[key]};
  }

  updateTask(task) {
    this.tasks[task.id] = task;
    this.tasksChanged.next(this.lists);
    this.storage.put(task);
  }

  addTask(listId, task) {
    task.id = uuidv4();
    this.tasks[task.id] = task;
    this.lists[listId].taskIds.push(task.id);
    this.tasksChanged.next(this.lists);
    this.storage.post(task, 'taskKeys');
    this.storage.put(this.lists[listId]);

  }
  
  removeTask(listId, task) {
    const removeIndex = this.lists[listId].taskIds.indexOf(task.id);
    this.lists[listId].taskIds.splice(removeIndex, 1);
    delete this.tasks[task.id];
    this.tasksChanged.next(this.lists);
    this.storage.remove(task, 'taskKeys');
    this.storage.put(this.lists[listId]);
  }
  
  moveTaskOnDrop(event: CdkDragDrop<any>) {
    const prevList = event.previousContainer.data;
    const currList = event.container.data;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.lists[currList.id].taskIds,
        event.previousIndex,
        event.currentIndex);

    } else {
      transferArrayItem(
      this.lists[prevList.id].taskIds,
      this.lists[currList.id].taskIds,
      event.previousIndex, event.currentIndex);
      this.storage.put(prevList);
    }
    this.storage.put(currList);
    this.tasksChanged.next(this.lists);
  }
}
