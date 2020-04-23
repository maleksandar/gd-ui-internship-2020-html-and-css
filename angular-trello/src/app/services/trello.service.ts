import { Injectable } from '@angular/core';
import { TaskList } from '../models/taskList.model';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

const LIST_STORAGE = 'LIST_STORAGE';
const TASK_STORAGE = 'LIST_STORAGE';

const defaultLists:{[path: string]: TaskList} = {
  'list-1': {
    id: 'list-1',
    title: 'todo',
    taskIds: ['task-1', 'task-2']
  },
  'list-2': {
    id: 'list-2',
    title: 'In Progress',
    taskIds: ['task-3', 'task-4'] 
  },
  'list-3': {
    id: 'list-3',
    title: 'Done',
    taskIds: ['task-5', 'task-6']
  }
}

const defaultTasks = {
  'task-1': {
    id: 'task-1',
    title: 'Go shopping1',
    description: 'card description'
  },
  'task-2': {
    id: 'task-2',
    title: 'Go shopping2',
    description: 'card description'
  },
  'task-3': {
    id: 'task-3',
    title: 'Go shopping3',
    description: 'card description'
  },
  'task-4': {
    id: 'task-4',
    title: 'Go shopping4',
    description: 'card description'
  },
  'task-5': {
    id: 'task-5',
    title: 'Go shopping',
    description: 'card description'
  },
  'task-6': {
    id: 'task-6',
    title: 'Go shoppinggg',
    description: 'card description'
  },
}
@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  taskOrderChanged = new Subject<{[path:string]: TaskList}>();
  private lists: {[path: string]: TaskList};
  private tasks: {[path: string]: Task};

  constructor() {
    this.lists = JSON.parse(localStorage.getItem(LIST_STORAGE)) || defaultLists;
    this.tasks = JSON.parse(localStorage.getItem(TASK_STORAGE)) || defaultTasks;
  }
  
  get(key){
    return {...this[key]};
  }

  updateTask(task) {
    this.tasks[task.id] = task;
  }

  addTask(listId, task) {
    this.tasks[task.id] = task;
    this.lists[listId].taskIds.push(task.id);
  }
  
  removeTask(listId, task) {
    const removeIndex = this.lists[listId].taskIds.indexOf(task.id);
    this.lists[listId].taskIds.splice(removeIndex, 1);
    delete this.tasks[task.id];
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
    }

    this.taskOrderChanged.next(this.lists);
  }
}
