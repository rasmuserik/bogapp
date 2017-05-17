import {store} from '../lib/store.js';
import { Provider } from 'react-redux'

/** 
 * Higher order component, that should be used to wrap all pages
 */
export function app(Component) {
  /**
   * Root component for all pages
   */
  function App(props) {
    return (
      <Provider store={store}>
        <div>
          <header>bogapp.dk</header>
          <ul>
            <li>{JSON.stringify(props)}</li>
          </ul>
          <Component />
        </div>
      </Provider>
    );
  }

  /** 
   * Figure out host/url
   */
  App.getInitialProps = async function(o) {
    store.dispatch({type: 'URL_QUERY', query: o.query});
    return {
      host: typeof location !== 'undefined'
      ? location.host
      : o.req && o.req.headers && o.req.headers.host,
      url: o.asPath,
      query: o.query
    };
  };

  return App;
}
