/* eslint-disable linebreak-style */
import axios from 'axios';
import { ADD_COMPANIES } from './companies.types';

const { REACT_APP_API_URL, REACT_APP_FMP_ID } = process.env;

export const addCompany = (companies) => ({
  type: ADD_COMPANIES,
  payload: companies,
});

export const fetchCompanies = () => async (dispatch) => {
  const res = await axios.get(`${REACT_APP_API_URL}stock/list?apikey=${REACT_APP_FMP_ID}`);
  dispatch(addCompany(res.data));
};
