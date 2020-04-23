import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import taskReducer from './reducers';


const middlewares = [logger];

export const store = createStore(taskReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store); 