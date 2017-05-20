import {store} from '../lib/store';

export async function search ( params ) {
  var q = params.q;
  store.dispatch({type: 'SEARCH_START', q});

  // TODO: call openplatform search
  let results = [
     q + "1",
     q + "2"
  ];
  store.dispatch({type: 'SEARCH_RESULT', results , q, isActive: false});
}
