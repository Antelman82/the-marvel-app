import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

test('renders app with navigation links', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const homeLink = screen.getByText(/MARVEL MATCH/i);
  expect(homeLink).toBeInTheDocument();
});
