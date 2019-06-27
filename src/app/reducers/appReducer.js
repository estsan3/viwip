import { SET_LOGIN } from "../actions/types";

const initialState = {
  isSignedIn: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isSignedIn: action.payload
      };
    default:
      return state;
  }
}
