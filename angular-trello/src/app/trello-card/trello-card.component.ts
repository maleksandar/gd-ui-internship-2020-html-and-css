import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {

  }

  ngOnInit(): void {

  }

  getText(): string {
    const CHAR_LIMIT = 200;
    return this.text.length > CHAR_LIMIT ? `${this.text.substring(0, CHAR_LIMIT - 3)}...` : this.text;
  }
}
