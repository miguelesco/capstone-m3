/* eslint-disable linebreak-style */
import { cleanup } from '@testing-library/react';
import moxios from 'moxios';
import testStore, { fetchCompanies, fetchCompanyProfile } from '../../__mocks__/mockStore';

describe('AddInitial Companies', () => {
  beforeEach(() => {
    moxios.install();
    cleanup();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const data = [
    {
      exchange: 'Binance',
      name: 'General Electric',
      symbol: 'GE',
      price: 120,
    },
    {
      exchange: 'Binance',
      name: 'Apple',
      symbol: 'AAPL',
      price: 400,
    },
    {
      exchange: 'Binance',
      name: 'Microsoft',
      symbol: 'MSFT',
      price: 758,
    },
  ];

  const profile = [
    {
      address: null,
      beta: 1,
      ceo: 'none',
      companyName: 'SPDR S&P 500 ETF TRUST',
      currency: 'USD',
      description: 'SPDR S&P 500 ETF TRUST (SPY) is a mutual fund that invests in the S&P 500 Index.',
      exchange: 'SPDR S&P 500 ETF TRUST',
      exchangeTimezoneName: 'America/New_York',
      exchangeTimezoneShortName: 'EDT',
      financialCurrency: 'USD',
      financialCurrencySymbol: '$',
    },
  ];

  const initialState = {
    companies: [],
    companyProfile: {},
    loading: false,
    error: '',
  };

  test('the store should be only with the initial state', () => {
    const store = testStore();
    const { companiesReducer } = store.getState();
    expect(companiesReducer).toEqual(initialState);
  });

  test('store is properly updated with the new companies', () => {
    const store = testStore();
    const expectedState = {
      ...initialState,
      companies: data,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data,
      });
    });

    return store.dispatch(fetchCompanies()).then(() => {
      const newState = store.getState();
      expect(newState.companiesReducer).toEqual(expectedState);
    });
  });

  test('store is updated with a company profile', () => {
    const store = testStore();
    const expectedState = {
      ...initialState,
      companyProfile: profile[0],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: profile,
      });
    });

    return store.dispatch(fetchCompanyProfile()).then(() => {
      const newState = store.getState();
      expect(newState.companiesReducer).toEqual(expectedState);
    });
  });
});
