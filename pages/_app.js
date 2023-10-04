import '@styles/globals.scss';
import store from '@utls/store';
import { SSRProvider } from 'react-bootstrap';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}
