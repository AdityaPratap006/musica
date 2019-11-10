import { SET_CURRENT_USER, SET_AUTH_STATE_FETCHED } from './user.types';

export const setCurrentUser = (user) => ({
    type:SET_CURRENT_USER,
    payload:user
});

export const setAuthStateFetched = (hasBeenFetched) => ({
    type:SET_AUTH_STATE_FETCHED,
    payload:hasBeenFetched
})