import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";


const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = composeWithDevTools(applyMiddleware(logger))

const store = createStore(persistedReducer,middleware);

export const persistor = persistStore(store);

export default store;
