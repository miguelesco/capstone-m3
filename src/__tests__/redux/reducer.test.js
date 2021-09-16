/* eslint-disable linebreak-style */
import companiesReducer from '../../redux/companies/companies';
import { addCompany, companyProfile } from '../../redux/companies/companies.action';

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

describe('Test Companies Reducer', () => {
  const initialState = {
    companies: [],
    companyProfile: {},
    loading: false,
    error: '',
  };

  it('should return the initial state', () => {
    expect(companiesReducer(undefined, {})).toEqual(initialState);
  });

  it('return a new state after sending a list of companies to be add', () => {
    const reducer = companiesReducer(initialState, addCompany(data));
    expect(reducer).toEqual({
      ...initialState,
      companies: data,
    });
  });

  it('return a new state after sending a company profile to be add', () => {
    const reducer = companiesReducer(initialState, companyProfile(profile));
    expect(reducer).toEqual({
      ...initialState,
      companyProfile: profile[0],
    });
  });
});
