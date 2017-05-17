import React from 'react';
import renderer from 'react-test-renderer';

import Work from '../../components/work';

it('renders correctly', () => {
  const tree = renderer.create(<Work bib={{title: 'hi'}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
