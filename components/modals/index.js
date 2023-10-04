import { forwardRef, useImperativeHandle, useState } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
const Modals = forwardRef(({ target, loadType, close, size, centered }, ref) => {
  const [state, setState] = useState({
    show: false,
    data: null,
  });
  const ModalContainer = dynamic(() => import(`./${loadType}`), { ssr: false });
  const ModalTarget = dynamic(() => import(`./target/${target}`), { ssr: false });
  useImperativeHandle(
    ref,
    () => {
      return {
        modalClose,
        modalShow,
        modalToggle,
      };
    },
    []
  );
  const modalClose = () => {
    setState((prev) => ({
      ...prev,
      show: false,
      data: null,
    }));
  };
  const modalShow = (data) => {
    console.log('data', data);
    setState((prev) => ({
      ...prev,
      show: true,
      data: data ? data : null,
    }));
  };
  const modalToggle = (data) => {
    setState((prev) => ({
      ...prev,
      show: !prev.show,
      data: data ? data : null,
    }));
  };
  return (
    <AnimatePresence>
      {state.show && (
        <ModalContainer
          ModalTarget={ModalTarget}
          modalProps={{ show: state.show, data: state.data, modalClose, modalShow, modalToggle, close, size, centered }}
        />
      )}
    </AnimatePresence>
  );
});
export default Modals;

Modals.defaultProps = {
  target: 'test',
  loadType: 'default',
  close: false,
  size: 'md',
  centered: true,
};
Modals.propTypes = {
  target: PropTypes.string.isRequired,
  loadType: PropTypes.string,
  close: PropTypes.bool,
  size: PropTypes.string,
  centered: PropTypes.bool,
};
