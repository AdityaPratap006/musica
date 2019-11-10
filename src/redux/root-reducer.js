import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


const persistConfiguration = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfiguration, rootReducer);