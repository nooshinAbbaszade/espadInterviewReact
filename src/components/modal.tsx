import React from 'react';
import BootstrapModal from 'react-bootstrap/Modal';

const Modal = ({
  setShow,
  showState,
  className,
  bodyClassName,
  children,
}:{
  setShow:Function;
  showState:boolean;
  className:string;
  bodyClassName:string;
  children:React.ReactNode
}) => {
  return (
    <BootstrapModal
      show={showState}
      onHide={() => setShow(false)}
      dialogClassName={className}
      centered
    >
      <BootstrapModal.Body className={bodyClassName || 'p-0'}>
        {children}
      </BootstrapModal.Body>
    </BootstrapModal>

  );
};

export default Modal;
