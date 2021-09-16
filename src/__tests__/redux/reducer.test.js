/* eslint-disable linebreak-style */
import companiesReducer from '../../redux/companies/companies';
import { addCompany } from '../../redux/companies/companies.action';

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

  it('return a new state after sending a list of companies to be add', async () => {
    const reducer = companiesReducer(initialState, addCompany(data));
    expect(reducer).toEqual({
      ...initialState,
      companies: data,
    });
  });
});
