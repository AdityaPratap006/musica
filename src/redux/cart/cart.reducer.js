import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM } from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(song => song.id !== action.payload.id)
            }
    
        default:
            return state;
    }
}

export default cartReducer;