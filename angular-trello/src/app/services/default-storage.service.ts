import { Injectable } from '@angular/core';
import { TaskList } from '../models/taskList.model';
import { Task } from '../models/task.model';

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

const defaultTasks:{[path: string]: Task} = {
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
export class DefaultStorageService {

  constructor() { }

  getDefaultLists() {
    return defaultLists;
  }

  getDefaultTasks() {
    return defaultTasks;
  }
}
