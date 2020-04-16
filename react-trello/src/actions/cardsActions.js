import { ACTION_TYPES } from './index';

export const addCard = (listID, text) => {
  return {
    type: ACTION_TYPES.ADD_CARD,
    payload: { listID, text }
  };
};

export const deleteCard = (listID, cardID) => {
  return {
    type: ACTION_TYPES.DELETE_CARD,
    payload: { listID, cardID }
  };
};
