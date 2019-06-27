import imageApi from '../apis/imageApi';


import {
  ADD_IMAGE,
  EDIT_IMAGE,
  FETCH_IMAGE,
  RESET_IMAGE,
  UPDATE_IMAGE,
  SHOW_LOADER,
  HIDE_LOADER,
  TOTAL_SPACE
} from './types';

import { error, success } from 'react-notification-system-redux';

function getImageErrorMessage(message) {
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


export const addImage = image => dispatch => {
  dispatch({ type: SHOW_LOADER });


};

export const addTempImage = image => dispatch => {
  dispatch({ type: SHOW_LOADER });
  dispatch({
    type: ADD_IMAGE,
    payload: image
  });
  dispatch({ type: HIDE_LOADER })
  dispatch(
    success(getImageSuccessMessage('Imagen cargada temporalmente.'))
  );
  return null
};


export const editImage = image => {
  return {
    type: EDIT_IMAGE,
    payload: image
  };
};

export const fetchImage = id => dispatch => {
  dispatch({ type: SHOW_LOADER });

  imageApi
    .getImage(id)
    .then(response =>
      dispatch({
        type: FETCH_IMAGE,
        payload: response.data
      })
    )
    .catch(() =>
      dispatch(
        error(getImageErrorMessage('An error occurred while loading image.'))
      )
    )
    .finally(() => dispatch({ type: HIDE_LOADER }));
};

export const resetImage = () => {
  return {
    type: RESET_IMAGE
  };
};

export const updateImage = image => dispatch => {
  dispatch({ type: SHOW_LOADER });

  return imageApi
    .updateImage(image)
    .then(response => {
      dispatch({
        type: UPDATE_IMAGE,
        payload: response.data
      });

      dispatch(
        success(getImageSuccessMessage('The image was successfully updated.'))
      );
    })
    .finally(() => dispatch({ type: HIDE_LOADER }));
};





