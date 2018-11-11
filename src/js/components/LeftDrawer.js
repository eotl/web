import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';

class LeftDrawer extends Component {
  render() {
    return (
      <Drawer open={this.props.open}>
        <MenuItem><Link to="/wiki/index">Wiki</Link></MenuItem>
        <MenuItem><Link to="/wiki/bogleg">Bogleg</Link></MenuItem>
      </Drawer>
    );
  }
}

export default LeftDrawer;
