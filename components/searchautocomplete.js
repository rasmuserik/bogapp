import React, { PureComponent } from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import Drawer from 'react-md/lib/Drawers';
import AutoComplete from 'react-md/lib/Autocompletes/Autocomplete'

import {connect, dispatch} from 'react-redux'
import { store, set}  from '../lib/store.js';
import { search } from '../lib/api.js';

function SearchAutoComplete ({q,  isActive,  results, onSelect}) {
  return (
  <AutoComplete
    id="searchBooks"
    placeholder="Search"
    data={results}
    dataLabel="book"
    value={q}
    onChange={ (query) => {
      store.dispatch({type: 'SEARCH_START', q:query});
      search({q: query});
    }}
    onAutocomplete = { (query) => {
      console.log("onAutoComplete", query);
    }}
    block
    className="md-title--toolbar"
    inputClassName="md-text-field--toolbar"
    />);
}

function mapStateToProps(state) {
  let props = {
    isActive: state.getIn('search', 'isActive'),
    q: state.getIn(['search', 'q']),
    results: state.getIn(['search', 'results']).toJS()
  };
  console.log("props:", props);
  return props;
}

export default connect(mapStateToProps)(SearchAutoComplete);
