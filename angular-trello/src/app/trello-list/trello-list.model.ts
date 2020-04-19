import { Card } from '../trello-card/trello-card.model';

export class List {
  constructor(public id: number, public title: string, public cards: Card[]) {
    this.id = id;
    this.title = title;
    this.cards = cards;
  }
}
