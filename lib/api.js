import {store} from '../lib/store';

export function search({q}) {
  store.dispatch({type: 'SEARCH_START', q});
  fetch('http://openlibrary.org/search.json?q=' + q)
    .then(response => {
      return response.json();
    })
    .then(data => {
      var results = adaptOpenLibraryResults(data);
      store.dispatch({type: 'SEARCH_RESULT', results, q});
    });
}

function adaptOpenLibraryResults(data) {
  var results = [];
  data.docs.forEach(doc => {
    results.push({
      id: doc.edition_key[0],
      key: doc.edition_key[0],
      name: doc.title_suggest
    });
  });
  return results;
}

export async function open({workId}) {
  store.dispatch({type: 'OPEN_WORK', workId});
}
