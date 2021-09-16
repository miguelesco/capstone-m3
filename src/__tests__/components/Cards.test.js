/* eslint-disable linebreak-style */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from '../../components/home/cards/Cards';

const setRender = (props) => {
  const component = render(
    <Router>
      <Cards stocks={props} />
    </Router>,
  );
  return component;
};
describe('Test Cards component', () => {
  // Arrange
  let component;
  const stocks = [
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
  beforeEach(() => {
    component = setRender(stocks);
  });

  // Assert
  test('Testing Cards component render', () => {
    const { getByTestId } = component;
    expect(getByTestId('container')).toBeInTheDocument();
  });

  test.each(stocks)('Testing Cards component render', (stock) => {
    const { getByTestId } = component;
    expect(getByTestId(stock.symbol)).toBeInTheDocument();
  });
});
