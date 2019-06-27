import * as TYPES from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_IMAGES:
      return action.payload;
    case TYPES.ADD_IMAGE:
      return [
        ...state,
        action.payload
      ];
    case TYPES.UPDATE_IMAGE: {
      const itemIndex = state.findIndex(img => img.id === action.payload.id);

      if (itemIndex < 0) {
        return state;
      }

      const newState = [...state];
      newState.splice(itemIndex, 1, action.payload);

      return newState;
    }
    case TYPES.DELETE_IMAGE: {
      const itemIndex = state.findIndex(img => img.name === action.payload);

      if (itemIndex < 0) {
        return state;
      }

      const newState = [...state];
      newState.splice(itemIndex, 1);

      return newState;
    }

    default:
      return state;
  }
}
