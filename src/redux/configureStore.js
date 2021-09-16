/* eslint-disable linebreak-style */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import CompaniesReducer from './companies/companies';

const reducer = combineReducers({
  CompaniesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
