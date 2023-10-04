import { Container } from 'react-bootstrap';
import GetStartBtn from './get-start-btns';

const GetStart = ({ styles }) => {
  return (
    <Container className="text-center py-5">
      <h2>Get started</h2>
      <p className="mt-3">Upload a document and start chatting with it today. No credit card required.</p>
      <div className="d-flex justify-content-center">
        <GetStartBtn styles={styles} />
      </div>
    </Container>
  );
};
export default GetStart;
