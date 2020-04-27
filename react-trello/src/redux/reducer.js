import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import taskReducer from './Tasks/tasks.reducer';
import errorReducer from './Error/error.reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['errors'],
}

const reducer = combineReducers({
  tasks: taskReducer,
  errors: errorReducer,
});

export default persistReducer(persistConfig, reducer);