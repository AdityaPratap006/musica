import { createSelector } from 'reselect';

const selectSongs = state => state.songs;

export const selectSongsList = createSelector(
    [selectSongs],
    songs => songs.songsList
) 