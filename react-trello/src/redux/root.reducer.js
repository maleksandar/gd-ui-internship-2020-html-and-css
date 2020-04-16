import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localStorage  from 'redux-persist/lib/storage';
import taskReducer from './Task/task.reducer';
import taskModalReducer from './TaskModal/taskModal.reducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['task', 'taskList']
}

const rootReducer = combineReducers({
  task: taskReducer,
  modal: taskModalReducer
});

export default persistReducer(persistConfig, rootReducer);