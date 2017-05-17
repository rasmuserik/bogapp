/** 
 * Higher order component, that should be used to wrap all pages
 */
export function app(Component) {

  /**
   * Root component for all pages
   */
  function App(props) {
    return <div>
      <header>bogapp.dk</header>
      <ul>
        <li>{JSON.stringify(props)}</li>
      </ul>

      <Component />

    </div>
  }

  /** 
   * Figure out host/url
   */
  App.getInitialProps = async function (o) {
    return {
      host: (typeof location !== 'undefined')
      ? location.host 
      : (o.req && o.req.headers && o.req.headers.host),
      url: o.url
    }
  };

  return App
}
