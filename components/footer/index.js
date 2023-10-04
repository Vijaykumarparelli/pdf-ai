import { Col, Container, Row } from 'react-bootstrap';
import ColSection from './col-sention';

const Footer = () => {
  return (
    <Container className="mt-5 py-5 footer-top-border">
      <Row>
        <Col md={4}>
          <h5>Logo</h5>
          <p className="mt-4">Chat with any PDF: ask questions, get summaries, find information, and more.</p>
        </Col>
        <Col md={8}>
          <Row>
            <ColSection data={products} />
            <ColSection data={we_also_built} />
            <ColSection data={company} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;

const products = {
  title: 'Products',
  children: [
    { name: 'Use cases', link: '' },
    { name: 'Chrome extension 🔥', link: '' },
    { name: 'API docs', link: '' },
    { name: 'Resources', link: '' },
    { name: 'FAQ', link: '' },
  ],
};
const we_also_built = {
  title: 'We also built',
  children: [
    { name: 'PDF Tools', link: '' },
    { name: 'QuickyAI', link: '' },
    { name: 'Docsium', link: '' },
  ],
};
const company = {
  title: 'Company',
  children: [
    { name: 'Legal', link: '' },
    { name: 'Affiliate program 💵', link: '' },
  ],
};
