import * as TYPES from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    
    case TYPES.UPLOAD_IMAGES: {
      return action.payload
    }
    
    default:
      return state;
  }
}
