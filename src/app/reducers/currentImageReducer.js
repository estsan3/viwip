import { FETCH_IMAGE, RESET_IMAGE, EDIT_IMAGE } from '../actions/types';

const initialState = {
  tooltip: '',
  showTooltip: false,
  url: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGE:
      return action.payload;
    case EDIT_IMAGE:
      return action.payload;
    case RESET_IMAGE:
      return initialState;
    default:
      return state;
  }
}
