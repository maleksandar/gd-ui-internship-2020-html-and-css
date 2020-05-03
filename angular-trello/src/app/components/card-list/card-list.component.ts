import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() status: string;

  title: string;
  description: string;
  isFormOpen: boolean = false;

  constructor(
    private taskService: TasksService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {}

  toogleButton() {
    this.isFormOpen = true;
  }

  closeAddForm() {
    this.isFormOpen = false;
  }

  onHandleSave() {
    this.taskService.addTask(this.title, this.description);
    this.title = '';
    this.description = '';
    this.isFormOpen = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.storeService.storeData();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.storeService.storeData();
    }
  }
}
