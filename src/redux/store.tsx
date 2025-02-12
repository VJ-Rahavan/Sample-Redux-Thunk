import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userDetailsReducer from './reducers/UserReducers';
import voiceDetailsReducer from './reducers/VoiceDetailsReducers';

const customizedMiddleware = (getDefaultMiddleware: any) => {
  return getDefaultMiddleware({serializableCheck: false});
};

// Combine reducers
const rootReducer = combineReducers({
  userDetailsReducer: userDetailsReducer,
  voiceDetailsReducer: voiceDetailsReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['voiceDetailsReducer'], // voiceDetailsReducer will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with thunk middleware and disable serializable check
export const storex = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware, // Add redux-thunk middleware
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof storex.getState>;
export type AppDispatch = typeof storex.dispatch;

// Persistor for persisting the store
export const persistor = persistStore(storex);
