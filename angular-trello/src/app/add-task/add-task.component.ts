import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output('newTask')
  public emitnewTask: EventEmitter<ToDo>;

  public title: string;
  public description: string;
  public brojac: number = 4;

  constructor() {
    this.title = '';
    this.description = '';
    this.emitnewTask = new EventEmitter<ToDo>();
  }

  ngOnInit(): void {}

  onAddTask(): void {
    if (this.title === '') {
      window.alert('Unesite title');
      return;
    }

    if (this.description === '') {
      window.alert('Unesite description');
      return;
    }

    const newTask = new ToDo(this.brojac, this.title, this.description);
    this.brojac++;  
    this.emitnewTask.emit(newTask);
    this.title = '';
    this.description = '';
  }
}
