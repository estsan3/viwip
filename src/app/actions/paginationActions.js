import * as TYPES from './types';

export const moveToPage = pageNumber => {
  return {
    type: TYPES.MOVE_TO_PAGE,
    payload: pageNumber
  };
};

export const setPageSize = pageSize => {
  return {
    type: TYPES.SET_PAGE_SIZE,
    payload: pageSize
  };
};

export const moveToFirst = () => {
  return {
    type: TYPES.MOVE_TO_FIRST
  };
};

export const moveToLast = () => {
  return {
    type: TYPES.MOVE_TO_LAST
  };
};

export const moveToNext = () => {
  return {
    type: TYPES.MOVE_TO_NEXT
  };
};

export const moveToPrev = () => {
  return {
    type: TYPES.MOVE_TO_PREV
  };
};