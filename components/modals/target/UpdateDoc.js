import React from 'react';
import { Button, Form } from 'react-bootstrap';

function UpdateDoc({ modalProps }) {
  const { data, modalClose } = modalProps;
  return (
    <div className="px-2 py-3">
      <h5>Upload a document</h5>
      <div className="mt-4">
        <Form.Label>Name</Form.Label>
        <Form.Control defaultValue={data.file_name} />
      </div>
      <div className="mt-4 d-flex">
        <Button variant="ai-primary" className="me-2 w-100" onClick={modalClose}>
          Upload
        </Button>
        <Button variant="outline-ai-primary" className="ms-2 w-100" onClick={modalClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default UpdateDoc;
