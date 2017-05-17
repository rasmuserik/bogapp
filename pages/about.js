import {app} from '../components/App';
import {connect} from 'react-redux';
import Link from 'next/link';

function About(props) {
  return <div>
    <Link href={'?' + Math.random()}>hi</Link>
    {JSON.stringify(props)}
    about
  </div>
}

function mapStateToProps(state) {
  return {
    query: state.get('query').toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return {
    someFn: (args) => {
      dispatch({type: 'FOO', val: 'bar'});
    }
  }
}

export default app(connect(mapStateToProps, mapDispatchToProps)(About));
