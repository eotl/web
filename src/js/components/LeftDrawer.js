import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
  paper: {
    'top': '60px'
  }
}

class LeftDrawer extends Component {
  render() {
    return (
      <Drawer open={this.props.open} classes={{
        paper: this.props.classes.paper
      }}>
        <Link to="/wiki/index"><MenuItem>Wiki</MenuItem></Link>
        <Link to="/wiki/bogleg"><MenuItem>Bogleg</MenuItem></Link>
      </Drawer>
    );
  }
}

export default withStyles(styles)((props) => <LeftDrawer {...props}/>);
