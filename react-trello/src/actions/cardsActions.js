export const addCard = (listID, text) => {
  return {
    type: 'ADD_CARD',
    payload: { listID, text }
  };
};
