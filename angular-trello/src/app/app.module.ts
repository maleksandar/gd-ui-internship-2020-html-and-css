import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TodoServiceService } from './todo-service.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    AddTaskComponent,
    EditTaskComponent,
  ],
  imports: [BrowserModule, FormsModule, DragDropModule, AppRoutingModule],
  providers: [TodoServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
