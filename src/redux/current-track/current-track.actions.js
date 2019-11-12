import { SET_CURRENT_TRACK } from './current-track.types';

export const setCurrentTrack = (song) => ({
    type: SET_CURRENT_TRACK,
    payload:song
})