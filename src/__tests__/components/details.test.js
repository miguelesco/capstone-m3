/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import DetailsPage from '../../components/details/Details';
import store from '../../redux/configureStore';

describe('Test Details component', () => {
  // Arrange
  const history = createMemoryHistory();
  const route = '/details/SPY';
  history.push(route);
  // Act
  const component = render(
    <Provider store={store}>
      <Router history={history}>
        <DetailsPage />
      </Router>
    </Provider>,
  );

  // Assert
  test('Testing Details component render', () => {
    expect(component.container).toBeInTheDocument();
  });
});
