import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksService } from './services/tasks.service';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    EditDialogComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
