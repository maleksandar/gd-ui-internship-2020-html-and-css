import { Card } from '../trello-card/trello-card.model';

export class List {
  id: number;
  title: string;
  cards: Card[];

  constructor(id: number, title: string, cards: Card[]) {
    this.id = id;
    this.title = title;
    this.cards = cards;
  }
}
