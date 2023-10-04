import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import SiteNavList from './site-nav-list';
const Header = ({ headerClass, login_nav }) => {
  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${headerClass}`}>
      <Container>
        <Navbar.Brand as={Link} href="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <SiteNavList menu={login_nav ? login_menu : menu} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
const menu = [
  {
    name: '🆕 Chrome extension',
    link: '/chrome-extension',
  },
  {
    name: 'Use cases',
    link: '/',
  },
  {
    name: 'Get started →',
    link: '/sign-in',
  },
];
const login_menu = [
  {
    name: '🆕 Chrome extension',
    link: '/chrome-extension',
  },
  {
    name: 'Documents',
    link: '/documents',
  },
  {
    name: 'Chats',
    link: '/documents/chats',
  },
  {
    name: '🎁 Upgrade',
    link: '/',
  },
];
