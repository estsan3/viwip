import { combineReducers } from "redux";

import { reducer as notificationsReducer } from "react-notification-system-redux";

import modalReducer from "./modalReducer";
import imagesReducer from "./imagesReducer";
import loaderReducer from "./loaderReducer";
import currentImageReducer from "./currentImageReducer";
import devicesReducer from "./devicesReducer";
import uploadReducer from "./uploadReducer";
import appReducer from "./appReducer";

export default combineReducers({
  modal: modalReducer,
  images: imagesReducer,
  devices: devicesReducer,
  loader: loaderReducer,
  currentImage: currentImageReducer,
  notifications: notificationsReducer,
  upload: uploadReducer,
  app: appReducer
});
