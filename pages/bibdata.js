import React from 'react';
import {app} from '../components/app';
import Work from '../components/work';
import {connect} from 'react-redux';
import Immutable from 'immutable';

function mapStateToProp(state) {
  let id = state.getIn(['query', 'id'], undefined);
  let bib = state.getIn(['works', id]);

  if (Immutable.isImmutable(bib)) {
    bib = bib.toJS();
  }

  return {id, bib};
}

export default app(
  connect(mapStateToProp)(({bib}) => <Work bib={bib} />)
);
