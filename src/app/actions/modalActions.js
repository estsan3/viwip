import { SHOW_MODAL, CLOSE_MODAL } from './types';

export const showModal = modalConfig => {
  return {
    type: SHOW_MODAL,
    payload: modalConfig
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
