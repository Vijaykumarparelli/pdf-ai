import { Col, Nav } from 'react-bootstrap';

const ColSection = ({ data }) => {
  return (
    <Col md={4}>
      <p className="fw-bold">{data.title}</p>
      <Nav as="ul" className="mt-2 flex-column">
        {data.children.map(({ name }, k) => (
          <li key={k} className="mt-3">
            <p>{name}</p>
          </li>
        ))}
      </Nav>
    </Col>
  );
};
export default ColSection;
