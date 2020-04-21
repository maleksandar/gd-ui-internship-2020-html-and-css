import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrelloBoardComponent } from './components/trello-board/trello-board.component';
import { TrelloTaskComponent } from './components/trello-task/trello-task.component';
import { TrelloListComponent } from './components/trello-list/trello-list.component';
import { TrelloModalComponent } from './components/trello-modal/trello-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    TrelloBoardComponent,
    TrelloTaskComponent,
    TrelloListComponent,
    TrelloModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
