import { Component, OnInit, Input } from '@angular/core';
import { TrelloModalComponent } from '../trello-modal/trello-modal.component';
import * as TrelloListActions from '../trello-list/store/trello-list.actions';
import { Store } from '@ngrx/store';
import { List } from '../trello-list/trello-list.model';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../trello-card/trello-card.model';
import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPES } from '../trello-list/store/trello-list.actions';

@Component({
  selector: 'app-trello-action-button',
  templateUrl: './trello-action-button.component.html',
  styleUrls: ['./trello-action-button.component.scss']
})
export class TrelloActionButtonComponent implements OnInit {

  @Input() listID: string;
  @Input() cardsLength: number;

  constructor(
    private store: Store<{ board: { lists: List[] } }>,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {

  }

  getText(): string {
    return this.cardsLength > 0 ? 'Add another card' : 'Add a card';
  }

  updateCard(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TrelloModalComponent, {
      width: '500px',
      data: {
        listID: this.listID,
        title: '',
        text: '',
        type: ACTION_TYPES.ADD_CARD
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('[Trello Action Button]: result - ' + result);

      // if (result) {
      //   const newCard = new Card(`card-${uuidv4()}`, result.title, result.text);
      //
      //   this.store.dispatch(new TrelloListActions.AddCard({
      //     listID: this.listID,
      //     newCard
      //   }));
      // }
    });
  }
}
