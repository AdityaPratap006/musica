import { UPDATE_SONG_COLLECTION } from './songs.types';

const INITIAL_STATE = {
    songsList: []
}

const songsReducer = ( state = INITIAL_STATE, action) => {

    switch(action.type){
        case UPDATE_SONG_COLLECTION:
            return {
                ...state,
                songsList:action.payload
            };
        
        default:
            return state;
    }
}

export default songsReducer;