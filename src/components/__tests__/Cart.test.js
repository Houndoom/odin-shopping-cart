import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cart from '../Cart';

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

describe('test Cart rendering', () => {
  it('no items in cart', () => {
    let cart = [0];
    const setCart = (newCart) => {
      cart = newCart
    }
    render(<Cart cart={[cart, setCart]} />)
    expect(screen.getByText('There is nothing in your cart.')).toBeInTheDocument();
  })


  it('one item in cart', () => {
    let cart = [2];
    const setCart = (newCart) => {
      cart = newCart
    }
    render(<Cart cart={[cart, setCart]} />)
    expect(screen.getByText('Poké Ball')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getAllByText('400').length).toBe(2);
  })

  it('two items in cart', () => {
    let cart = [2, 3];
    const setCart = (newCart) => {
      cart = newCart
    }
    render(<Cart cart={[cart, setCart]} />)
    expect(screen.getByText('Poké Ball')).toBeInTheDocument();
    expect(screen.getByText('Great Ball')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('600')).toBeInTheDocument();
    expect(screen.getByText('400')).toBeInTheDocument();
    expect(screen.getByText('1800')).toBeInTheDocument();
    expect(screen.getByText('2200')).toBeInTheDocument();
  })
})

