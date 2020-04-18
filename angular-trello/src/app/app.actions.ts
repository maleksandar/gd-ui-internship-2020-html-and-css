import { Action } from '@ngrx/store';
import { List } from './trello-list/list.model';

export const ACTION_TYPES = {
  ADD_CARD: 'ADD_CARD',
  DELETE_CARD: 'DELETE_CARD',
  UPDATE_CARD: 'UPDATE_CARD',
  DRAG_CARD: 'DRAG_CARD',
};

export class AddCard implements Action {
  readonly type = ACTION_TYPES.ADD_CARD;
  payload: List;
}
