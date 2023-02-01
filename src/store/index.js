import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeEnhancers())
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default { persistor };
