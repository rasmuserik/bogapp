import openplatform from 'openplatform';
import {store} from '../lib/store';

export async function search ( {q} ) {
  store.dispatch({type: 'SEARCH_START', q});
  // default query from example (expecting this to be cached)
  fetch("http://openlibrary.org/search.json?q=the+lord+of+the+rings").then( (response) => {
     return response.json();
  }).then( (data) => {
    var results = [];
    data.docs.forEach( (doc)=> {
      results.push( doc.cover_edition_key );
    });
    store.dispatch({type: 'SEARCH_RESULT', results , q, isActive: false});
  });
}

export async function open ( {workId} ) {
  store.dispatch({type: 'OPEN_WORK', workId});
}
