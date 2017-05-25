import React from 'react';
import {app} from '../components/app';
import Button from 'react-toolbox/lib/button/Button';

export function ToolboxTest (props) {
  return <div>
    <Button label="hello" raised primary />
    <Button label="hi" accent />
    <Button label="hello" raised />
  </div>
}

export default app(ToolboxTest);
