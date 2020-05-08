import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Output() isFormOpen = new EventEmitter<boolean>();

  constructor(private taskService: TasksService) {}

  closeAddForm() {
    this.isFormOpen.emit(false);
  }

  onHandleSave() {
    this.taskService.addTask(this.title, this.description);
    this.title = '';
    this.description = '';
    this.isFormOpen.emit(false);
  }

  ngOnInit(): void {}
}
