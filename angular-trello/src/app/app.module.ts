import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TrelloCardComponent } from './trello-card/trello-card.component';
import { TrelloListComponent } from './trello-list/trello-list.component';
import { TrelloBoardComponent } from './trello-board/trello-board.component';
import { TrelloActionButtonComponent } from './trello-action-button/trello-action-button.component';
import { TrelloModalComponent } from './trello-modal/trello-modal.component';

import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import listReducer from './trello-list/store/trello-list.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['board'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    TrelloCardComponent,
    TrelloListComponent,
    TrelloBoardComponent,
    TrelloActionButtonComponent,
    TrelloModalComponent,
  ],
  imports: [
    StoreModule.forRoot({ board: listReducer }, { metaReducers }),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
