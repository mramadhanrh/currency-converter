import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const composeEnhancers =
  typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Currency Converter'
      })
    : compose;

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(), composeEnhancers()));

const persistor = persistStore(store);

export default store;
export { persistor };
