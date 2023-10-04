import Link from 'next/link';
import { Nav } from 'react-bootstrap';

const SiteNavList = ({ menu }) => {
  return (
    <>
      {menu.map((item) => (
        <Nav.Link as={Link} href={item.link} key={item.name}>
          {item.name}
        </Nav.Link>
      ))}
    </>
  );
};
export default SiteNavList;
