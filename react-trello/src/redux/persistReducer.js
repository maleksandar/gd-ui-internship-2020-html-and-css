import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['state']
}

export default persistReducer(persistConfig, reducer);