import { Component, OnInit, Input } from '@angular/core';
import { List } from '../trello-list/trello-list.model';

import { Store } from '@ngrx/store';
import * as TrelloListActions from '../trello-list/store/trello-list.actions';

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

  constructor(private store: Store<{ board: { lists: List[] } }>) {

  }

  ngOnInit(): void {

  }

  deleteCard(): void {
    this.store.dispatch(new TrelloListActions.DeleteCard({ cardID: this.cardID, listID: this.listID }));
  }

  getText(): string {
    const CHAR_LIMIT = 200;
    return this.text.length > CHAR_LIMIT ? `${this.text.substring(0, CHAR_LIMIT - 3)}...` : this.text;
  }
}
