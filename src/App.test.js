import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

it('Check about tab works', () => {
  render(<App />);
  const aboutButton = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutButton);
  expect(screen.getByText("Welcome to Houndoom's Pokemart", {exact: false})).toBeInTheDocument();
})

it('Check shop tab works', () => {
  render(<App />);
  const aboutButton = screen.getByRole('link', { name: 'Shop' });
  userEvent.click(aboutButton);
  expect(screen.getByText('Welcome to the shop', {exact: false})).toBeInTheDocument();
})
