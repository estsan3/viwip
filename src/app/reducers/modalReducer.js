import { SHOW_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
    show: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
          ...action.payload,
          show: true
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
}
