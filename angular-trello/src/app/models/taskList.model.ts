import { Task } from './task.model';

export class TaskList {
  constructor(
    public id: string,
    public title: string,
    public tasks: {[path: string]: Task}
    ) {}
}
