const deepCopy = (object) => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const newObject = Array.isArray(object) ? [] : {};
  const keys = Object.keys(object);

  for (const key of keys) {
    const value = object[key];
    const isObject = (typeof value === 'object' && value !== null);
    newObject[key] = isObject ? deepCopy(value) : value;
  }

  return newObject;
};

export const addCard = (state, payload) => {
  const { listID, newCard } = payload;

  return {
    lists: state.lists.map(list => {
      if (list.id === listID) {
        return {
          ...list,
          cards: [...list.cards, newCard]
        };
      }

      return list;
    })
  };
};

export const deleteCard = (state, payload) => {
  const { listID, cardID } = payload;
  const newState = deepCopy(state);
  const { lists } = newState;

  const listIndex = lists.findIndex(list => list.id === listID);
  const cardIndex = lists[listIndex].cards.findIndex(card => card.id === cardID);
  lists[listIndex].cards.splice(cardIndex, 1);

  return newState;
};
