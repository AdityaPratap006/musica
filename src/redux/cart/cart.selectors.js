import  { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.length
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalPrice,item) => {

        return totalPrice + item.price;

    } , 0)
)