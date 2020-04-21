import { Injectable } from '@angular/core';
import { TaskList } from '../models/taskList.model';
import { insertItemToPosition } from '../utils/tello-storage.utility';

const LIST_STORAGE = 'list';
const defaultLists:{[path: string]: TaskList} = {
  'list-1': {
    id: 'list-1',
    title: 'todo',
    tasks: {
      'task-1': {
        id: 'task-1',
        title: 'Go shopping',
        description: 'card description'
      }
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class TrelloStorageService {
  private lists: {[path: string]: TaskList};
  constructor() {
    this.lists = JSON.parse(localStorage.getItem(LIST_STORAGE)) || defaultLists;
  }
  getLists() {
    return {...this.lists};
  }

  saveTask(listId, task) {
    this.lists[listId].tasks[task.id] = task;
  }

  removeTask(listId, task) {
    delete this.lists[listId][task.id];
  }
  
  moveTaskInDifferentList(prevList, currList, prevIndex, currIndex){
    const prevListTaskIds = Object.keys(prevList.tasks);
    const taskId = prevListTaskIds[prevIndex];
    const task = prevList.tasks[taskId];
    delete this.lists[prevList.id][task.id];
    this.lists[currList.id].tasks = insertItemToPosition(
      this.lists[currList.id].tasks,
      task.id,
      task,
      currIndex
    )
  }

  moveTaskInSameList(list, prevIndex, currIndex){
    const listTaskIds = Object.keys(this.lists[list.id].tasks);
    const taskId = listTaskIds[prevIndex];
    const task = list.tasks[taskId];
    delete this.lists[list.id].tasks[task.id];
    this.lists[list.id].tasks = insertItemToPosition(
      this.lists[list.id].tasks,
      task.id,
      task,
      currIndex
    )
  }
}
