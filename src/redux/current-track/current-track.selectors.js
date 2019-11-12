import { createSelector } from 'reselect';

const currentTrackState = state => state.currentTrack

export const selectCurrentTrack = createSelector(
    [currentTrackState],

    currentTrack => currentTrack.currentTrack
)
