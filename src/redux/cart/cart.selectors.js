import { createSelector } from 'reselect';

const selectCart = state => state.cart; // Selecionando apenas o state 'cart' do meu redux


/* Memoize Selector = Memorização do Seletor */
export const selectCartItems = createSelector(
  [selectCart], // coleção de input selectors, ou seja, nosso redux cart.
  cart => cart.cartItems // função para retornar um valor desse selector.
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
      0
  )
);
