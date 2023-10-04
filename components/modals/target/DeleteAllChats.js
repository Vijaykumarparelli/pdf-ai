import { Button } from 'react-bootstrap';

function DeleteAllChats({ modalProps }) {
  const { modalClose } = modalProps;
  return (
    <div className="px-2 py-3">
      <h5>Delete all chats</h5>
      <p className="mt-2">Are you sure you want to delete all chats? This action can not be undone.</p>

      <div className="mt-4 d-flex">
        <Button variant="ai-primary" className="me-2 w-100" onClick={modalClose}>
          Delete All
        </Button>
        <Button variant="outline-ai-primary" className="ms-2 w-100" onClick={modalClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default DeleteAllChats;
