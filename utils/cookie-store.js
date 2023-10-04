import Cookies from 'js-cookie';

export const getCookie = ({ name, isParse = true }) => {
  if (isParse) {
    return Cookies.get(name) ? JSON.parse(Cookies.get(name)) : null;
  }
  return Cookies.get(name);
};

export const setCookie = ({ name, params, isStringfy = true }) => {
  if (isStringfy) {
    Cookies.set(name, JSON.stringify(params));
    return;
  }
  Cookies.set(name, params);
};

export const removeCookie = ({ name }) => {
  Cookies.remove(name);
};
export const removeAllCookie = () => {
  Object.keys(Cookies.get()).forEach((name) => {
    Cookies.remove(name);
  });
};
