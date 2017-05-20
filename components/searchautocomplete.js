import React, { PureComponent } from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import Drawer from 'react-md/lib/Drawers';
import AutoComplete from 'react-md/lib/Autocompletes/Autocomplete'

import {connect, dispatch} from 'react-redux'
import { store, set}  from '../lib/store.js';
import { search } from '../lib/api.js';

function SearchAutoComplete ({q,  isActive,  results}) {
  return (
  <AutoComplete
    id="searchBooks"
    placeholder="Search"
    data={results}
    dataLabel="name"
    value={q}
    onChange={() => {
      search({q});
      set(["search", "q"], this.props.value);
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
