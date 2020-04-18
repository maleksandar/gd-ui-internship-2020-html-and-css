import { Card } from '../trello-card/card.model';

export class List {
  id: number;
  title: string;
  cards: Card[];
}
