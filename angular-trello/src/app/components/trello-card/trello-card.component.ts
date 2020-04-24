import { Component, OnInit, Input } from '@angular/core';
import { List } from '../trello-list/trello-list.model';

import { Store } from '@ngrx/store';
import * as TrelloListActions from '../trello-list/store/trello-list.actions';

import { MatDialog } from '@angular/material/dialog';
import { TrelloModalComponent } from '../trello-modal/trello-modal.component';
import { ACTION_TYPES } from '../trello-list/store/trello-list.actions';

@Component({
  selector: 'app-trello-card',
  templateUrl: './trello-card.component.html',
  styleUrls: ['./trello-card.component.scss']
})
export class TrelloCardComponent implements OnInit {

  @Input() index: number;
  @Input() listID: string;
  @Input() cardID: string;
  @Input() title: string;
  @Input() text: string;

  constructor(
    private store: Store<{ board: { lists: List[] } }>,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {

  }

  deleteCard(): void {
    this.store.dispatch(new TrelloListActions.DeleteCard({
      cardID: this.cardID,
      listID: this.listID
    }));
  }

  updateCard(): void {
    this.openDialog();
  }

  getText(): string {
    const CHAR_LIMIT = 200;
    return this.text.length > CHAR_LIMIT ? `${this.text.substring(0, CHAR_LIMIT - 3)}...` : this.text;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TrelloModalComponent, {
      width: '500px',
      data: {
        listID: this.listID,
        cardID: this.cardID,
        title: this.title,
        text: this.text,
        type: ACTION_TYPES.UPDATE_CARD
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('[Trello Card]: result - ' + result);
      // if (result) {
      //   this.title = result.title;
      //   this.text = result.text;
      //
      //   this.store.dispatch(new TrelloListActions.UpdateCard({
      //     listID: this.listID,
      //     cardID: this.cardID,
      //     title: this.title,
      //     text: this.text
      //   }));
      // }
    });
  }
}
