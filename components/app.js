import {connect} from 'react-redux';
import {store} from '../lib/store.js'
import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolBar from './toolbar'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head'

try {
  injectTapEventPlugin()
} catch(e) {
  /* ignore silently */
}

let ControlledToolBar = connect(
  (state) => ({ showMenu: state.getIn(['ui', 'showMenu']) }),
  (dispatch) => ({ toggleMenu: () => dispatch({type: 'TOGGLE_MENU'}) })
)(ToolBar);


/** 
 * Higher order component, that should be used to wrap all pages
 */
export function app(title, Component) {
  /**
   * Root component for all pages
   */
  function App(props) {
    title = title || 'BogApp.dk';
    return (
      <Provider store={store} >
        <MuiThemeProvider>
          <div>
            <Head>
              <meta name="viewport" content="width=device-width" />
                <link rel="icon" href="/icon.png" />
              <title>{title}</title>
              <style>{`body { margin: 0 }`}
              </style>
            </Head>
            <ControlledToolBar title={title}/>
            <Component />
          </div>
        </MuiThemeProvider>
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

