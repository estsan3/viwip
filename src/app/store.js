import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { reducer as notificationsReducer } from "react-notification-system-redux";
import modalReducer from "./reducers/modalReducer";
import imagesReducer from "./reducers/imagesReducer";
import loaderReducer from "./reducers/loaderReducer";
import currentImageReducer from "./reducers/currentImageReducer";
import devicesReducer from "./reducers/devicesReducer";
import uploadReducer from "./reducers/uploadReducer";
import appReducer from "./reducers/appReducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  modal: modalReducer,
  images: imagesReducer,
  devices: devicesReducer,
  loader: loaderReducer,
  currentImage: currentImageReducer,
  notifications: notificationsReducer,
  upload: uploadReducer,
  app: appReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
let store = createStore(persistedReducer, initialState, enhancer);
let persistor = persistStore(store);

export { store, persistor };
