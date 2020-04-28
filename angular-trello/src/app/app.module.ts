import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrelloBoardComponent } from './components/trello-board/trello-board.component';
import { TrelloTaskComponent } from './components/trello-task/trello-task.component';
import { TrelloListComponent } from './components/trello-list/trello-list.component';
import { TrelloDialogComponent } from './components/trello-dialog/trello-dialog.component'
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    TrelloBoardComponent,
    TrelloTaskComponent,
    TrelloListComponent,
    TrelloDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
