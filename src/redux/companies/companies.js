/* eslint-disable linebreak-style */
import { ADD_COMPANIES } from './companies.types';

const initialState = [];

const CompaniesReducer = (state = initialState, action) => {
  const companiesList = [...state];
  switch (action.type) {
    case ADD_COMPANIES: {
      const newCompanies = [...action.payload];
      newCompanies.length = 10;
      return [...newCompanies, ...companiesList];
    }
    default:
      return state;
  }
};

export default CompaniesReducer;
