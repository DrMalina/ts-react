import React from 'react';
import { CartWidget } from './CartWidget';
import { fireEvent } from '@testing-library/react';

describe('CartWidget', () => {
  it('navigates to cart summary page on click', () => {
    const { getByRole, history } = global.renderWithRouter(() => <CartWidget />);
    fireEvent.click(getByRole('link'));
    expect(history.location.pathname).toEqual('/cart');
  });

  it('shows the amount of products in the cart', () => {
    const stubCartHook = () => ({
      products: [
        {
          name: 'Product foo',
          price: 0,
          image: 'image.png',
        },
      ],
    });

    const { container } = global.renderWithRouter(() => <CartWidget useCartHook={stubCartHook} />);
    expect(container.innerHTML).toMatch('1');
  });
});
