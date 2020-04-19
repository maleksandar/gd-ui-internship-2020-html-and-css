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

export const updateCard = (state, payload) => {
  const { listID, cardID, title, text } = payload;
  const newState = deepCopy(state);
  const { lists } = newState;

  const listIndex = lists.findIndex(list => list.id === listID);
  const cardIndex = lists[listIndex].cards.findIndex(card => card.id === cardID);
  lists[listIndex].cards[cardIndex] = { id: cardID, title, text };
  return newState;
};

export const dragCard = (state, payload) => {
  const newState = deepCopy(state);
  const { lists } = newState;
  const { droppableIdStart, droppableIdEnd } = payload;

  console.log(JSON.stringify(payload));
  console.log(lists.map(list => list.id + ' ' + list.title));

  if (droppableIdStart === droppableIdEnd) {
    dragInsideSameList(lists, payload);
  } else {
    dragBetweenLists(lists, payload);
  }

  return newState;
};

const dragInsideSameList = (lists, payload) => {
  const {
    droppableIdStart,
    droppableIndexStart,
    droppableIndexEnd
  } = payload;

  // const list = lists.find(list => droppableIdStart === list.id);
  const list = getListByCardID(lists, droppableIdStart);
  const card = list.cards.splice(droppableIndexStart, 1);
  list.cards.splice(droppableIndexEnd, 0, ...card);
};

const dragBetweenLists = (lists, payload) => {
  const {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd
  } = payload;

  // const listStart = lists.find(list => droppableIdStart === list.id);
  const listStart = getListByCardID(lists, droppableIdStart);
  const card = listStart.cards.splice(droppableIndexStart, 1);
  // const listEnd = lists.find(list => droppableIdEnd === list.id);
  const listEnd = getListByCardID(lists, droppableIdEnd);
  listEnd.cards.splice(droppableIndexEnd, 0, ...card);
};

const getListByCardID = (lists, cardID) => {
  return lists.find(list => {
    for (const card of list.cards) {
      if (card.id === cardID) {
        return list;
      }
    }
  });
};
