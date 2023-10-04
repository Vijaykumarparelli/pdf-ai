import { Alert } from 'react-bootstrap';
import { MdErrorOutline } from 'react-icons/md';
export const InputAlert = ({ message }) => {
  return (
    <Alert variant="danger" className="py-1" style={{ fontSize: '12px' }}>
      <div className="d-flex align-items-center text-danger emailDashboard-fs12">
        <MdErrorOutline />
        <span className="ms-2">{message}</span>
      </div>
    </Alert>
  );
};
export default InputAlert;
