import React from 'react';
import { Header } from './Header';
import { fireEvent } from '@testing-library/react';

jest.mock('./CartWidget', () => ({
  CartWidget: () => <div>Cart widget</div>,
}));

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = global.renderWithRouter(() => <Header />);
    expect(container.innerHTML).toMatch('Goblin Store');
    expect(container.innerHTML).toMatch('Cart widget');
  });

  it('navigates to / on header title click', () => {
    const { getByText, history } = global.renderWithRouter(() => <Header />);
    fireEvent.click(getByText('Goblin Store'));
    expect(history.location.pathname).toEqual('/');
  });
});
