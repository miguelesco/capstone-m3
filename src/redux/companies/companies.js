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
      let filterProfileEntries = Object.entries(action.payload[0]);
      // eslint-disable-next-line no-unused-vars
      filterProfileEntries = filterProfileEntries.filter(([_, value]) => !!value);

      const newProfile = Object.fromEntries(filterProfileEntries);
      return {
        ...defaultState,
        companyProfile: newProfile,
        loading: false,
        error: '',
      };
    }
    case GET_COMPANIES: {
      const newCompanies = [...action.payload];
      if (action.payload.length > 10) {
        newCompanies.length = 10;
      }
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
