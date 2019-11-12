import { SET_CURRENT_TRACK } from './current-track.types';

const INITIAL_STATE = {
    currentTrack:null
}

const currentTrackReducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        case SET_CURRENT_TRACK:
            return {
                ...state,
                currentTrack:action.payload
            }
        default:
            return state;
    }
}

export default currentTrackReducer;