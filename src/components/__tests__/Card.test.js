import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';
import userEvent from '@testing-library/user-event';

const addToCartFunc = jest.fn();

describe('test Card component rendering', () => {
  it('card renders properly', () => {
    render(<Card name='Pokeball' price='200' img='' key='Pokeball' id='0' addToCartFunc={addToCartFunc} />);

    expect(screen.getByText('Pokeball')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByRole('textbox').value).toBe('1');
  })
})

describe('Card component quantity', () => {
  it('input increases properly', () => {
    render(<Card name='Pokeball' price='200' img='' key='Pokeball' id='0' addToCartFunc={addToCartFunc} />);

    userEvent.click(screen.getByRole('button', { name: '+'}));
    expect(screen.getByRole('textbox').value).toBe('2');
  })

  it('input decreases properly', () => {
    render(<Card name='Pokeball' price='200' img='' key='Pokeball' id='0' addToCartFunc={addToCartFunc} />);

    userEvent.click(screen.getByRole('button', { name: '−'}));
    expect(screen.getByRole('textbox').value).toBe('0');
  })

  it('input does not decrease below 0', () => {
    render(<Card name='Pokeball' price='200' img='' key='Pokeball' id='0' addToCartFunc={addToCartFunc} />);

    userEvent.click(screen.getByRole('button', { name: '−'}));
    userEvent.click(screen.getByRole('button', { name: '−'}));
    expect(screen.getByRole('textbox').value).toBe('0');
  })

  it('input typing works', () => {
    render(<Card name='Pokeball' price='200' img='' key='Pokeball' id='0' addToCartFunc={addToCartFunc} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, '0');
    expect(screen.getByRole('textbox').value).toBe('10');
  })

  it('backspace works', () => {
    render(<Card name='Pokeball' price='200' img='' key='Pokeball' id='0' addToCartFunc={addToCartFunc} />);

    const input = screen.getByRole('textbox');
    userEvent.click(screen.getByRole('button', { name: '+'}));
    userEvent.type(input, '0');
    expect(screen.getByRole('textbox').value).toBe('20');
    userEvent.type(input, '{Backspace}');
    expect(screen.getByRole('textbox').value).toBe('2');
  })

  it('backspace on single digit defaults to 0', () => {
    render(<Card name='Pokeball' price='200' img='' key='Pokeball' id='0' addToCartFunc={addToCartFunc} />);

    const input = screen.getByRole('textbox');
    userEvent.click(screen.getByRole('button', { name: '+'}));
    expect(screen.getByRole('textbox').value).toBe('2');
    userEvent.type(input, '{Backspace}');
    expect(screen.getByRole('textbox').value).toBe('0');
  })
})