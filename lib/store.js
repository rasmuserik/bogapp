import {createStore} from 'redux';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  query: {},
  ui: {
    showMenu: false
  },
  bibdata: {
  },
  search: {
    isActive: false,
    q: "",
    results: []
  },
  works: {
    'test:1234': {
      id: 'test:1234',
      title: 'Test titel',
      creators: []
    }
  }
});

export const store = createStore(reducer);

// Actions
export function set(path, value) {
  store.dispatch({type: 'SET_IN', path, value});
}

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_START':   //search has been started
      return state.mergeDeep(Immutable.fromJS({search: {
        q: action.q,
        results: [],
        isActive: true
      }}));
    case 'SEARCH_RESULT':   //one or more search result has come in
      return state.mergeDeep(Immutable.fromJS({search: {
        q: action.q,
        results: action.results,
        isActive: false
      }}));
    case 'SET_IN':
      return setIn(state, action.path, action.value);
    case 'TOGGLE_MENU':
      return state.setIn(
        ['ui', 'showMenu'],
        !state.getIn(['ui', 'showMenu'])
      );
    case 'URL_QUERY':
      return state.set('query', Immutable.fromJS(action.query || {}));
    default:
      return state;
  }
}

// Access shorthand

export function get(path, defaultValue) {
  let result;
  try {
    result = store.getState().getIn(makePath(path), defaultValue);
  } catch (e) {
    result = defaultValue;
  }
  if (Immutable.isImmutable(result)) {
    result = result.toJS();
  }
  return result;
}

// Utility

function setIn(o, path, val) {
  path = makePath(path);

  if (path.length === 0) {
    return Immutable.fromJS(val);
  }

  let key = path[0];
  path = path.slice(1);

  if (typeof key === 'string') {
    if (!(o instanceof Immutable.Map)) {
      o = new Immutable.Map();
    }
  } else if (typeof key === 'number') {
    if (!(o instanceof Immutable.List)) {
      o = new Immutable.List();
    }
  } else {
    throw new Error('setIn got unexpected key');
  }

  return o.set(key, setIn(o.get(key), path, val));
}

function makePath(path) {
  if (typeof path === 'string') {
    path = path.split('.');
  }

  if(!Array.isArray(path)) {
    throw new Error('makepath expects path to be string or array, got: ' + path);
  }
  return path;
}
