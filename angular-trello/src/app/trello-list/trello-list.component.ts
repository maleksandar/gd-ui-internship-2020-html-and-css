import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../trello-card/card.model';
import { List } from './list.model';

import { Store } from '@ngrx/store';
import * as ListActions from '../app.actions';

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
    this.store.dispatch(new ListActions.AddCard({ newCard: card, listID: this.listID }));
  }

  handleShowActionButton(title: string): boolean {
    const LIST_NAME = 'Todo';
    return title === LIST_NAME;
  }
}
