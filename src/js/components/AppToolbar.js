import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
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
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase 
            placeholder="Search…" 
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </Toolbar>
    );
  }
}

export default AppToolbar;
