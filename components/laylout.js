import { useDispatch } from 'react-redux';
import Footer from './footer';
import Header from './header';
import { getCookie } from '@utls/cookie-store';
import { useEffect, useLayoutEffect } from 'react';
import { addUserInfo, getUserInfoByToken } from '@store/user.slice';
const Layout = ({ children, isFooter, headerClass, login_nav, bodyOverflow }) => {
  const token = getCookie({ name: 'token' });
  const dispatch = useDispatch();
  useEffect(() => {
    token && dispatch(getUserInfoByToken({ token }));
  }, []);
  return (
    <div className="root-container">
      <div className="header-container">
        <Header headerClass={headerClass} login_nav={login_nav} />
      </div>
      <div className={`boby-container d-flex flex-column flex-1 ${bodyOverflow ? 'overflow-auto' : ''}`}>
        {children}
      </div>
      {isFooter && <Footer />}
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
Layout.defaultProps = {
  isFooter: false,
  headerClass: '',
  login_nav: false,
  bodyOverflow: false,
};
