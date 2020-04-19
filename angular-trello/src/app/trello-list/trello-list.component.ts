import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../trello-card/trello-card.model';
import { List } from './trello-list.model';

import { Store } from '@ngrx/store';
import * as TrelloListActions from './store/trello-list.actions';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloListComponent implements OnInit {

  @Input() listID: string;
  @Input() title: string;
  @Input() cards: Card[];

  constructor(private store: Store<{ board: { lists: List[] } }>) {

  }

  ngOnInit(): void {

  }

  addCard(): void {
    const card = new Card('card-1', 'New Title', 'New Text');
    this.store.dispatch(new TrelloListActions.AddCard({
      listID: this.listID,
      newCard: card
    }));
  }

  handleShowActionButton(title: string): boolean {
    const LIST_NAME = 'Todo';
    return title === LIST_NAME;
  }
}
