import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello-modal',
  templateUrl: './trello-modal.component.html',
  styleUrls: ['./trello-modal.component.scss']
})
export class TrelloModalComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;

  constructor() {

  }

  ngOnInit(): void {

  }
}
