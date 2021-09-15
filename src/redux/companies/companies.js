/* eslint-disable linebreak-style */
import {
  GET_COMPANIES, GET_COMPANY_PROFILE, LOADING, ERROR,
} from './companies.types';

const initialState = {
  companies: [],
  companyProfile: {},
  loading: false,
  error: '',
};

const CompaniesReducer = (state = initialState, action) => {
  const defaultState = { ...state };
  switch (action.type) {
    case LOADING: {
      return {
        ...defaultState,
        loading: true,
        error: '',
      };
    }
    case ERROR: {
      return {
        ...defaultState,
        loading: false,
        error: action.payload,
      };
    }
    case GET_COMPANY_PROFILE: {
      const newProfile = action.payload[0];
      return {
        ...defaultState,
        companyProfile: newProfile,
        loading: false,
        error: '',
      };
    }
    case GET_COMPANIES: {
      const newCompanies = [...action.payload];
      newCompanies.length = 10;
      return {
        ...defaultState,
        companies: [...newCompanies],
        loading: false,
        error: '',
      };
    }
    default:
      return defaultState;
  }
};

export default CompaniesReducer;
