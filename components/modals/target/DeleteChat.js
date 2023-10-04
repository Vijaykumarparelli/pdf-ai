import { Button } from 'react-bootstrap';

function DeleteChat({ modalProps }) {
  const { data, modalClose } = modalProps;
  return (
    <div className="px-2 py-3">
      <h5>Delete chat</h5>
      <p className="mt-2">Are you sure you want to delete the following chat?</p>
      <p className="mt-3 ps-3" style={{ borderLeft: '2px solid' }}>
        <b>{data.chat_key}</b>
      </p>
      <div className="mt-4 d-flex">
        <Button variant="ai-primary" className="me-2 w-100" onClick={modalClose}>
          Delete
        </Button>
        <Button variant="outline-ai-primary" className="ms-2 w-100" onClick={modalClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default DeleteChat;
