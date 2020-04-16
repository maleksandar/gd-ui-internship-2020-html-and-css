export const addCard = (listID, text) => {
  return {
    type: 'ADD_CARD',
    payload: { listID, text }
  };
};

export const deleteCard = (listID, cardID) => {
  return {
    type: 'DELETE_CARD',
    payload: { listID, cardID }
  };
};
