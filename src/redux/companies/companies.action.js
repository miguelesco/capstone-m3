/* eslint-disable linebreak-style */
import axios from 'axios';
import {
  GET_COMPANIES, GET_COMPANY_PROFILE, LOADING, ERROR,
} from './companies.types';

const { REACT_APP_API_URL, REACT_APP_FMP_ID } = process.env;

export const addCompany = (companies) => ({
  type: GET_COMPANIES,
  payload: companies,
});

export const companyProfile = (companyProfile) => ({
  type: GET_COMPANY_PROFILE,
  payload: companyProfile,
});

export const loading = () => ({
  type: LOADING,
});

export const error = (error) => ({
  type: ERROR,
  payload: error,
});

export const fetchCompanyProfile = (symbol) => async (dispatch) => {
  try {
    dispatch(loading());
    const res = await axios.get(
      `${REACT_APP_API_URL}profile/${symbol}?apikey=${REACT_APP_FMP_ID}`,
    );
    dispatch(companyProfile(res.data));
  } catch (err) {
    dispatch(error(err?.message || err));
  }
};

export const fetchCompanies = () => async (dispatch) => {
  try {
    dispatch(loading());
    const res = await axios.get(`${REACT_APP_API_URL}stock/list?apikey=${REACT_APP_FMP_ID}`);
    dispatch(addCompany(res.data));
  } catch (err) {
    dispatch(error(err?.message || err));
  }
};
