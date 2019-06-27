import imageApi from '../apis/imageApi';

import {
  FETCH_IMAGES,
  DELETE_IMAGE,
  SET_ITEMS_COUNT,
  SHOW_LOADER,
  HIDE_LOADER,
  UPLOAD_IMAGES

} from './types';

import { success, error } from 'react-notification-system-redux';

function getImagesErrorMessage(message) {
  return {
    title: 'Error!',
    message
  };
}

function getImageSuccessMessage(message) {
  return {
    title: 'Success!',
    message
  };
}

export const fetchImages = (start, limit) => dispatch => {
  dispatch({ type: SHOW_LOADER });

  imageApi
    .getImages(start, limit)
    .then(response => {
      dispatch({
        type: FETCH_IMAGES,
        payload: response.data
      });

      dispatch({
        type: SET_ITEMS_COUNT,
        payload: parseInt(response.headers['x-total-count'] || 0, 10)
      });
    })
    .catch(() =>
      dispatch(
        error(getImagesErrorMessage('An error occurred while loading images.'))
      )
    )
    .finally(() => dispatch({ type: HIDE_LOADER }));
};

export const deleteImage = name => dispatch => {
  dispatch({ type: SHOW_LOADER });
  dispatch({
    type: DELETE_IMAGE,
    payload: name
  })
  dispatch({ type: HIDE_LOADER })
};

export const uploadImages = rows => dispatch => {

  dispatch({
    type: UPLOAD_IMAGES,
    payload: {rows}
  })


};



