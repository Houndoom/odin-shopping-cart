import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

// Mock items object as require.context function used to obtain references to img files does not work in jest
jest.mock('../items', () => {
  return [
    {
      name: "Poké Ball",
      price: 200,
      img: ''
    },
    {
      name: "Great Ball",
      price: 600,
      img: ''
    }
  ]
});

global.confirm = () => true;

describe('Test links', () => {
  it('Check about tab works', () => {
    render(<App />);
    const aboutButton = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutButton);
    expect(screen.getByText("Welcome to the Pokémart", {exact: false})).toBeInTheDocument();
  })
  
  it('Check shop tab works', () => {
    render(<App />);
    const shopButton = screen.getByRole('link', { name: 'Shop' });
    userEvent.click(shopButton);
    expect(screen.getByText('Poké Ball')).toBeInTheDocument();
  })
  
  it('Check cart icon works', () => {
    render(<App />);
    const cartButton = screen.getByRole('link', { name: 'Shopping Cart' });
    userEvent.click(cartButton);
    expect(screen.getByText('There is nothing in your cart.')).toBeInTheDocument();
  })
});

describe('Test cart state', () => {
  it('Add to cart works', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
    userEvent.click(screen.getByRole('link', { name: 'Shopping Cart' }));
    expect(screen.getByText('Poké Ball')).toBeInTheDocument();
    expect(screen.getAllByText('200').length).toBe(3);
  })

  it('input increases properly', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
    userEvent.click(screen.getByRole('link', { name: 'Shopping Cart' }));
    userEvent.click(screen.getAllByRole('button', { name: '+' })[0]);

    expect(screen.getByText('Poké Ball')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getAllByText('400').length).toBe(2);
  })

  it('input decreases properly', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    userEvent.click(screen.getAllByRole('button', { name: '+' })[1]);
    userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[1]);
    userEvent.click(screen.getByRole('link', { name: 'Shopping Cart' }));
    userEvent.click(screen.getByRole('button', { name: '−' }));

    expect(screen.getByText('Great Ball')).toBeInTheDocument();
    expect(screen.getAllByText('600').length).toBe(3);
  })

  it('input does not decrease below 1', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
    userEvent.click(screen.getByRole('link', { name: 'Shopping Cart' }));
    userEvent.click(screen.getByRole('button', { name: '−' }));
    expect(screen.getByText('Poké Ball')).toBeInTheDocument();
    expect(screen.getAllByText('200').length).toBe(3);
  })

  it('input typing works', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
    userEvent.click(screen.getByRole('link', { name: 'Shopping Cart' }));
    const input = screen.getByRole('textbox');
    userEvent.type(input, '0');
    expect(screen.getAllByText('2000').length).toBe(2);
  })

  it('backspace works', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
    userEvent.click(screen.getByRole('link', { name: 'Shopping Cart' }));
    const input = screen.getByRole('textbox');
    userEvent.type(input, '0');
    userEvent.type(input, '{Backspace}');
    expect(screen.getAllByText('200').length).toBe(3);
  })

  it('backspace on single digit defaults to 1', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
    userEvent.click(screen.getByRole('link', { name: 'Shopping Cart' }));
    const input = screen.getByRole('textbox');
    userEvent.click(screen.getByRole('button', { name: '+'}));
    userEvent.type(input, '{Backspace}');
    expect(screen.getAllByText('200').length).toBe(3);
  })

  it('remove works', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
    userEvent.click(screen.getByRole('link', { name: 'Shopping Cart' }));
    userEvent.click(screen.getByRole('button', { name: 'Remove' }));
    expect(screen.getByText('There is nothing in your cart.')).toBeInTheDocument();
  })
})