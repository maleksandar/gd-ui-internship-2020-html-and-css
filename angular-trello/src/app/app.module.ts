import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrelloCardComponent } from './trello-card/trello-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TrelloListComponent } from './trello-list/trello-list.component';
import { TrelloBoardComponent } from './trello-board/trello-board.component';

import { StoreModule } from '@ngrx/store';
import listReducer from './app.reducer';
import { TrelloActionButtonComponent } from './trello-action-button/trello-action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TrelloCardComponent,
    TrelloListComponent,
    TrelloBoardComponent,
    TrelloActionButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot({ board: listReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
