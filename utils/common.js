export const classNames = (...all_names) => {
  return all_names.join(' ');
};
export const urlGenerator = (baseUri, params, type = 'params') => {
  const newUriBack = new URL(baseUri);
  Object.entries(params).map(([key, value]) => {
    newUriBack.searchParams.append(key, value);
  });
  return newUriBack;
};
export const googleSignOnUrl = () => {
  const googleUri = urlGenerator('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount', {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    scope: 'email profile',
    redirect_uri: process.env.NEXT_PUBLIC_BASEURL + process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
    response_type: 'code',
    state: 'hiring_' + new Date().getTime() / 1000.0,
    prompt: 'select_account',
    flowName: 'GeneralOAuthFlow',
  });
  return googleUri;
};
import jwtDecode from 'jwt-decode';
export const decodeToken = (token) => {
  return jwtDecode(token);
};
