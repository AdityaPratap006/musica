import { UPDATE_SONG_COLLECTION } from './songs.types';

export const updateSongCollection = (songs) => ({
    type:UPDATE_SONG_COLLECTION,
    payload:songs
})