import { Col, Container, Row } from 'react-bootstrap';

const AiContainer = ({ className, md, children }) => {
  return (
    <Container className={className}>
      <Row className="justify-content-center">
        <Col md={md}>{children}</Col>
      </Row>
    </Container>
  );
};
export default AiContainer;

AiContainer.defaultProps = {
  className: '',
  md: 10,
};
