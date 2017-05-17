'use strict';

import React from 'react';
import Work from '../../components/work';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Work bib={{title: 'hi'}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
