import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import AppSearch from '../containers/AppSearch';
import classNames from 'classnames';
import styles from '../styles/appLayout';

@withStyles(styles, { withTheme: true })
class AppToolbar extends Component {
  render() {
    const { classes, appDrawerOpen, toggleAppDrawer } = this.props;
    return (
      <Toolbar disableGutters={appDrawerOpen}>
        <IconButton 
          onClick={toggleAppDrawer} 
          color="inherit" 
          aria-label="Open drawer"
          className={classNames(classes.menuButton, appDrawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          End of the Line LPMUD
        </Typography>
        <div className={classes.grow} />
        <AppSearch />
      </Toolbar>
    );
  }
}

export default AppToolbar;
