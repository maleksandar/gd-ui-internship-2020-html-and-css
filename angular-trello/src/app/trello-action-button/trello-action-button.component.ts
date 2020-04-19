import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trello-action-button',
  templateUrl: './trello-action-button.component.html',
  styleUrls: ['./trello-action-button.component.scss']
})
export class TrelloActionButtonComponent implements OnInit {

  @Input() listID: string;
  @Input() cardsLength: number;

  constructor() {

  }

  ngOnInit(): void {

  }

  getText(): string {
    return this.cardsLength > 0 ? 'Add another card' : 'Add a card';
  }
}
