import React from 'react';
import BootstrapModal from 'react-bootstrap/Modal';
import {ReactComponent as CloseIcon} from "../assets/image/closeIcon.svg";

const Modal = ({
  setShow,
  showState,
  className,
  bodyClassName,
  noCloseBtn,
  backdrop,
  children,
  bsPrefix,
}) => {
  return (
    <BootstrapModal
      show={showState}
      onHide={() => setShow(false)}
      dialogClassName={className}
      backdrop={backdrop}
      bsPrefix={bsPrefix}
      centered
    >
      <BootstrapModal.Body className={bodyClassName || 'p-0'}>
        {children}
      </BootstrapModal.Body>
    </BootstrapModal>

  );
};

export default Modal;
