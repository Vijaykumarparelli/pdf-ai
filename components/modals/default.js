import React from 'react';
import { Modal } from 'react-bootstrap';

function defaultModal({ ModalTarget, modalProps }) {
  const { show, modalClose, size, centered, close } = modalProps;
  return (
    <Modal show={show} onHide={modalClose} size={size} centered={centered}>
      <Modal.Body>
        {close && <div>asd</div>}
        <ModalTarget modalProps={modalProps} />
      </Modal.Body>
    </Modal>
  );
}

export default defaultModal;
