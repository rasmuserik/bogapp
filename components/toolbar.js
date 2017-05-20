import React from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import Drawer from 'react-md/lib/Drawers';
import Link from 'next/link';


export default ({title, showMenu, toggleMenu}) => (
  <div>
    <Toolbar
      colored
      title={title}
      nav={<Button onClick={toggleMenu} key="nav" icon>menu</Button>}
      actions={[]}
    />
    <Drawer visible={showMenu} onVisibilityToggle={toggleMenu}>
      <Toolbar
        colored
        title="BogApp.dk"
        nav={<Button onClick={toggleMenu} key="nav" icon>close</Button>}
      />
      <Link href='/bibdata'>
      <Button flat style={{width: '100%'}} label="Work info" />
    </Link>
    <Link href='/bibdata?id=ting:1234'>
      <Button flat style={{width: '100%'}} label="Bibdata - test"  />
    </Link>
    <Link href='/about'>
      <Button flat style={{width: '100%'}} label="About"  />
    </Link>
    </Drawer>
  </div>
);
