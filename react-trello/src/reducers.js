import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localStorage  from 'redux-persist/lib/storage';
import trelloBoardReducer from './containers/TrelloBoard/reducer';
import taskModalReducer from './containers/TrelloModal/reducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
}

const rootReducer = combineReducers({
  board: trelloBoardReducer,
  modal: taskModalReducer
});

export default persistReducer(persistConfig, rootReducer);