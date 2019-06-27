import { SHOW_LOADER, HIDE_LOADER } from '../actions/types';

const initialState = {
  visible: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { visible: true };
    case HIDE_LOADER:
      return { ...initialState };
    default:
      return state;
  }
}
