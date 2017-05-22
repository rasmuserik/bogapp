import React, {PureComponent} from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import Drawer from 'react-md/lib/Drawers';
import AutoComplete from 'react-md/lib/Autocompletes/Autocomplete';

import {connect, dispatch} from 'react-redux';
import {store, set} from '../lib/store.js';
import {search, open} from '../lib/api.js';
import throttle from 'lodash.throttle';

var throttledSearch = throttle(search, 250);

function SearchAutoComplete({q, isActive, results}) {
  return (
    <AutoComplete
      id="searchBooks"
      type="search"
      placeholder="Search"
      data={results}
      dataLabel="book"
      filter={null}
      dataLabel="name"
      dataValue="id"
      className="md-cell"
      clearOnAutocomplete
      onChange={query => {
        throttledSearch({q: query});
      }}
      onAutocomplete={workId => {
        open({workId});
      }}
    />
  );
}

function mapStateToProps(state) {
  let props = {
    isActive: state.getIn(['search', 'isActive']),
    q: state.getIn(['search', 'q']),
    results: state.getIn(['search', 'results']).toJS()
  };
  return props;
}

export default connect(mapStateToProps)(SearchAutoComplete);
