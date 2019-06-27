import * as TYPES from '../actions/types';

const DEFAULT_PAGE_SIZE = 5;
const DEFAULT_PAGE_SIZE_OPTIONS = [1, DEFAULT_PAGE_SIZE, 25, 50];

const initialState = {
  pageNumber: 1,
  itemsCount: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  pageSizeOptions: DEFAULT_PAGE_SIZE_OPTIONS
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.MOVE_TO_PAGE:
      return {
        ...state,
        pageNumber: action.payload
      };
    case TYPES.MOVE_TO_FIRST:
      return {
        ...state,
        pageNumber: 1
      };
    case TYPES.MOVE_TO_LAST: {
      const { pageNumber, pageSize, itemsCount } = state;

      const newPageNumber = Math.ceil(itemsCount / pageSize);

      if (newPageNumber === pageNumber) {
        return state;
      }

      return {
        ...state,
        pageNumber: newPageNumber
      };
    }
    case TYPES.MOVE_TO_NEXT: {
      const { pageNumber, pageSize, itemsCount } = state;

      const newPageNumber = pageNumber + 1;

      if (newPageNumber > Math.ceil(itemsCount / pageSize)) {
        return state;
      }

      return {
        ...state,
        pageNumber: newPageNumber
      };
    }
    case TYPES.MOVE_TO_PREV: {
      const { pageNumber } = state;
      const newPageNumber = pageNumber - 1;

      if (newPageNumber <= 0 || pageNumber === newPageNumber) {
        return state;
      }

      return {
        ...state,
        pageNumber: newPageNumber
      };
    }
    case TYPES.SET_ITEMS_COUNT:
      return {
        ...state,
        itemsCount: action.payload
      };
    case TYPES.SET_PAGE_SIZE:
      return {
        ...state,
        pageNumber: 1,
        pageSize: action.payload
      };
    default:
      return state;
  }
}
