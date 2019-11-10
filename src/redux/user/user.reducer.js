import { SET_CURRENT_USER, SET_AUTH_STATE_FETCHED } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  authStateFetched:false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    
    case SET_AUTH_STATE_FETCHED:
        return{
            ...state,
            authStateFetched: action.payload
        }

    default:
      return state;
  }
};

export default userReducer;
