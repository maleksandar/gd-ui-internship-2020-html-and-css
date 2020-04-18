import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { List } from '../trello-list/list.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss']
})
export class TrelloBoardComponent implements OnInit {
  board: Observable<{ lists: List[] }>;

  constructor(private store: Store<{ board: { lists: List[] } }>) {

  }

  ngOnInit(): void {
    this.board = this.store.select('board');
  }
}
