import FileUploader from '@components/file-uploader';
import OrDivider from '@components/or-divider';
import { Button, Form } from 'react-bootstrap';

function UploadDocs({ modalProps }) {
  const { modalClose } = modalProps;
  const getFiles = (files) => {
    console.log(files);
  };
  return (
    <div className="px-2 py-3">
      <h5>Upload a document</h5>
      <FileUploader getFiles={getFiles} className="mt-4" />
      <OrDivider className="my-4" />
      <div>
        <Form.Label>Import from URL</Form.Label>
        <Form.Control />
      </div>
      <div className="mt-3">
        <Form.Label>Tags</Form.Label>
        <Form.Control />
      </div>
      <div className="mt-4">
        <Form.Check type="checkbox" label="Private document?" id="private-document" />
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

export default UploadDocs;
