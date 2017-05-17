import React from 'react';
import renderer from 'react-test-renderer';

import ToolBar from '../../components/toolbar';

it('has a dummy test, while the main tests are disabled', () => {});

/*
window.matchMedia = window.matchMedia || (() => ({
  matches : true
}));

it('renders correctly', () => {
  const tree = renderer
    .create(<ToolBar title="titel" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('show the menu', () => {
  const tree = renderer
    .create(<ToolBar showMenu={true} toggleMenu={()=>{}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
*/
