import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import employeesReducer from '../features/employees-slice'

// Implement Redux Store + Redux Persist to keep the data after page reloading

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  employees: employeesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)
