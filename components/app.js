import {connect} from 'react-redux';
import {store} from '../lib/store.js';
import React from 'react';
import {Provider} from 'react-redux';
import ToolBar from './toolbar';
import Head from 'next/head';
import {isClient, parseQuery} from '../lib/util';

let ControlledToolBar = connect(
  state => ({showMenu: state.getIn(['ui', 'showMenu'])}),
  dispatch => ({toggleMenu: () => dispatch({type: 'TOGGLE_MENU'})})
)(ToolBar);

/** 
 * Higher order component, that should be used to wrap all pages
 */
export function app(Component) {
  /**
   * Root component for all pages
   */
  class App extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      store.dispatch({type: 'URL_QUERY', query: this.props.query});
      let title = this.props.title;
      return (
        <Provider store={store}>
          <div>
            <Head>
              <meta name="viewport" content="width=device-width" />
              <link
                rel="stylesheet"
                href="https://unpkg.com/react-md@1.0.13/dist/react-md.light_green-light_blue.min.css"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons|Roboto:400,500,700"
              />
              <link rel="icon" href="/icon.png" />
              <title>{title}</title>
              <style>
                {`body { margin: 0 }`}
              </style>
            </Head>
            <ControlledToolBar title={title} />
            <Component title={title} />
          </div>
        </Provider>
      );
    }
  }

  App.defaultProps = {
    title: 'BogApp.dk',
    query: isClient() && parseQuery(location.search.slice(1))
  }

  /** 
   * Figure out host/url
   */
  App.getInitialProps = async function(o) {
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
