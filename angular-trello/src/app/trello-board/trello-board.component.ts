import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { List } from '../trello-list/trello-list.model';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Card } from '../trello-card/trello-card.model';

import * as TrelloListActions from '../trello-list/store/trello-list.actions';

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

  dragCard(
    droppableIdStart: string,
    droppableIdEnd: string,
    droppableIndexStart: number,
    droppableIndexEnd: number): void {
    this.store.dispatch(new TrelloListActions.DragCard({
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd
    }));
  }

  // TODO: Find better solution
  // [HACK]: don't use '__ngContext__[20]'
  drop(event: CdkDragDrop<any[]>) {
    // @ts-ignore
    console.log(event.previousContainer);
    console.log(event.container);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        [...event.container.data],
        event.previousIndex,
        event.currentIndex
      );

      this.dragCard(
        // @ts-ignore
        event.container.__ngContext__[20],
        // @ts-ignore
        event.container.__ngContext__[20],
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        [...event.previousContainer.data],
        [...event.container.data],
        event.previousIndex,
        event.currentIndex
      );

      this.dragCard(
        // @ts-ignore
        event.previousContainer.__ngContext__[20],
        // @ts-ignore
        event.container.__ngContext__[20],
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
