import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import songsReducer from './songs/songs.reducer';
import currentTrackReducer from './current-track/current-track.reducer';


const persistConfiguration = {
    key: 'root',
    storage,
    whitelist: ['cart','user','songs'],
    blacklist:[]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    songs: songsReducer,
    currentTrack: currentTrackReducer
});

export default persistReducer(persistConfiguration, rootReducer);