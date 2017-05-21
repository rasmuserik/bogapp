import openplatform from 'openplatform';
import {store} from '../lib/store';

// TODO: throttle search
export function search ( {q} ) {
  store.dispatch({type: 'SEARCH_START', q});
  fetch("http://openlibrary.org/search.json?q=" + q).then( (response) => {
     return response.json();
  }).then( (data) => {
    var results = adaptOpenLibraryResults(data);;
    store.dispatch({type: 'SEARCH_RESULT', results , q});
  });
}

// TODO: display more information than edition key in list
function adaptOpenLibraryResults (data) {
  var results = [];
  data.docs.forEach( (doc)=> {
    results.push( doc.cover_edition_key );
  });
  return results;
}

export async function open ( {workId} ) {
  store.dispatch({type: 'OPEN_WORK', workId});
}
