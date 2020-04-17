import { ACTION_TYPES } from './index';

export const toggleModal = (cardID) => {
  return {
    type: ACTION_TYPES.TOGGLE_MODAL,
    payload: { cardID }
  };
};
