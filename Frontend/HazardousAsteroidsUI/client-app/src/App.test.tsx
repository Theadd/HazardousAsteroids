import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a visible search button', () => {
  render(<App />);
  const searchElements = screen.getAllByTitle(/search/i);
  const searchButtons = Array.from(searchElements)
    .filter(b => b instanceof HTMLButtonElement)
  const lastSearchButton = searchButtons[searchButtons.length - 1]

  expect(lastSearchButton).toBeInTheDocument();
  expect(lastSearchButton).toBeVisible()
});
