import { Action } from '@ngrx/store';
import { Card } from '../../trello-card/trello-card.model';

export const ACTION_TYPES = {
  ADD_CARD: 'ADD_CARD',
  DELETE_CARD: 'DELETE_CARD',
  UPDATE_CARD: 'UPDATE_CARD',
  DRAG_CARD: 'DRAG_CARD',
};

export class AddCard implements Action {
  readonly type = ACTION_TYPES.ADD_CARD;

  constructor(public payload: { listID: string, newCard: Card }) {

  }
}

export class DeleteCard implements Action {
  readonly type = ACTION_TYPES.DELETE_CARD;

  constructor(public payload: { cardID: string, listID: string }) {

  }
}

export type ListActions = AddCard | DeleteCard;
