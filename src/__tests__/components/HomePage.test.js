/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import HomePage from '../../components/home/Home';
import store from '../../redux/configureStore';

describe('Test Home component', () => {
  // Arrange

  // Act
  const component = render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );

  // Assert
  test('Testing Home component render', () => {
    expect(component.container).toBeInTheDocument();
  });
});
