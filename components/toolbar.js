import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default ({title, showMenu, toggleMenu}) => <div>
    <AppBar title={title} 
      iconElementRight={<FlatButton label="Log in" />}
      onLeftIconButtonTouchTap={toggleMenu}
    />
    <Drawer open={showMenu}>
      <AppBar title="BogApp.dk"
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        onLeftIconButtonTouchTap={toggleMenu}
      />
      <MenuItem>Søg</MenuItem>
      <MenuItem>Om App'en</MenuItem>
    </Drawer>
  </div>
