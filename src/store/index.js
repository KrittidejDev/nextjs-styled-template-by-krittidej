import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authenReducer from "./reducers/authenReducer";
import notiAlertReducer from "./reducers/notiAlertReducer";
import sidebarHamburgerReducer from "./reducers/sidebarHamburgerReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["notiAlertRedux"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    authenRedux: authenReducer,
    notiAlertRedux: notiAlertReducer,
    sidebarHamburgerRedux: sidebarHamburgerReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { store, persistor };
