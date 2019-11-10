import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM } from './cart.types';

export const toggleCartHidden = () => ({
    type:TOGGLE_CART_HIDDEN,
})

export const addCartItem = (song) => ({
    type:ADD_CART_ITEM,
    payload:song
})

export const removeCartItem = (song) => ({
    type:REMOVE_CART_ITEM,
    payload:song
})
