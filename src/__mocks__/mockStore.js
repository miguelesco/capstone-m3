/* eslint-disable linebreak-style */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import companiesReducer from '../redux/companies/companies';
import { addCompany, companyProfile } from '../redux/companies/companies.action';

const RootReducer = combineReducers({
  companiesReducer,
});

const testStore = () => {
  const store = createStore(RootReducer, applyMiddleware(thunk));
  return store;
};

export default testStore;

export const fetchCompanies = () => async (dispatch) => {
  await axios.get('https://financialmodelingprep.com/api/v3/stock/list?apiKey=3da1374daa717b3de389106a25ccfe1b')
    .then((res) => {
      const { data } = res;
      dispatch(addCompany(data));
    });
};

export const fetchCompanyProfile = () => async (dispatch) => {
  await axios.get('https://financialmodelingprep.com/api/v3/profile/SPY?apiKey=3da1374daa717b3de389106a25ccfe1b')
    .then((res) => {
      const { data } = res;
      dispatch(companyProfile(data));
    });
};
