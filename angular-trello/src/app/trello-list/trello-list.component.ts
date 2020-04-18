import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../trello-card/card.model';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloListComponent implements OnInit {

  @Input() listID: string;
  @Input() title: string;
  @Input() cards: Card[];

  constructor() {

  }

  ngOnInit(): void {

  }
}
