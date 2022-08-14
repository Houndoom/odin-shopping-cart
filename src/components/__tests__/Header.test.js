import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from '../Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header component', () => {
  it('Renders store name', () => {
    render(
    <Router>
      <Header />
    </Router>
    );
    expect(screen.getByText("Houndoom's Pokémart")).toBeInTheDocument();
  })

  it('Renders nav bar with links', () => {
    render(
    <Router>
      <Header />
    </Router>
    );
    expect(screen.getByRole('link', {name: 'About'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Shop'})).toBeInTheDocument();
  })
})