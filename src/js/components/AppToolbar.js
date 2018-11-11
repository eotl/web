import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from '../styles/layout';

class AppToolbar extends Component {
  render() {
    const { classes, leftDrawerOpen, toggleLeftDrawer } = this.props;
    return (
      <Toolbar disableGutters={leftDrawerOpen}>
        <IconButton 
          onClick={toggleLeftDrawer} 
          color="inherit" 
          aria-label="Open drawer"
          className={classNames(classes.menuButton, leftDrawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Material-UI
        </Typography>
        <div />
        <div>
          <div>
            <SearchIcon />
          </div>
          <InputBase placeholder="Search…" />
        </div>
      </Toolbar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppToolbar);
