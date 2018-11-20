import { combineReducers, applyMiddleware, createStore } from 'redux';
import appReducer from './reducers/appReducer';
import markdownReducer from './reducers/markdownReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import markdownSaga from './sagas/markdown';

const reducers = combineReducers({
  app: appReducer,
  markdown: markdownReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(createLogger(), sagaMiddleware);

const store = createStore(reducers, {
  app: {},
  markdown: {}
}, middleware);

sagaMiddleware.run(markdownSaga);

export default store;
