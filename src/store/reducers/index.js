import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import boombReducer from "./boomb";
import confettiReducer from "./confetti";
import sidebarReducer from "./sideBar";
import modalReducer from "./modal";
import backgroundReducer from "./background";
import imageLibraryReducer from "./imageLibrary";
import textDataReducer from "./textData";
import standardReducer from "./standard";
import sessionReducer from "./session";
import boomfImagesReducer from "./images";
import loadingReducer from "./loader";
import mallowPopsReducer from "./mallowPops";
import shopifyReducer from "./shopify";
import notificationReducer from "./notification";
import localeReducer from './locale';

const rootPersistConfig = {
  key: "root",
  storage: storage,
};
const persistConfig = {
  key: "boomb",
  storage: storage,
};
const persistConfigMallow = {
  key: "Mallow",
  storage: storage,
};
const persistConfigImagesLibrary = {
  key: "ImagesLibrary",
  storage: storage,
};

const rootReducer = combineReducers({
  boombReducer: persistReducer(persistConfig, boombReducer),
  confettiReducer,
  sidebarReducer,
  modalReducer,
  backgroundReducer,
  imageLibraryReducer: persistReducer(
    persistConfigImagesLibrary,
    imageLibraryReducer
  ),
  textDataReducer,
  standardReducer,
  sessionReducer,
  boomfImagesReducer,
  loadingReducer,
  mallowPopsReducer: persistReducer(persistConfigMallow, mallowPopsReducer),
  shopifyReducer,
  notificationReducer,
  localeReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
