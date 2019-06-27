import { showModal, closeModal } from './modalActions';

export const showPreview = body => dispatch => {
  dispatch(
    showModal({
      title: 'Preview',
      closeName: 'Close',
      onClose: () => dispatch(closeModal()),
      body: body
    })
  );
};
