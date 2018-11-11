import { combineReducers, applyMiddleware, createStore } from 'redux';
import appReducer from './reducers/appReducer';
import { createLogger } from 'redux-logger';

const reducers = combineReducers({
  app: appReducer
})

const middleware = applyMiddleware(createLogger());

const store = createStore(reducers, {app: {}}, middleware);

export default store;
