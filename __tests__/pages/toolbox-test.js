import React from 'react';
import renderer from 'react-test-renderer';

import {ToolboxTest} from '../../pages/toolbox-test';

it('renders correctly', () => {
  const tree = renderer.create(<ToolboxTest />).toJSON();
  expect(tree).toMatchSnapshot();
});
