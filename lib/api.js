import {store} from '../lib/store';

export async function search ( params ) {

  var q = params.q;
  // TODO: call open platform here
  let results = [
     q + "1",
     q + "2"
  ];

  store.dispatch({type: 'SEARCH_RESULT', results , q: params.q, isActive: false});
}
