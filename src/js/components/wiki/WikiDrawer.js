import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/layout';

@withStyles(styles, { withTheme: true })
class AppDrawer extends Component {
  render() {
    const { theme, classes, open, toggle} = this.props;

    const menuItems = [
    ].map((item, index) => 
      <Link key={index} to={item[0]} className={classes.menuLink}>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            {item[2]}
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary={item[1]} />
        </MenuItem>
      </Link>
    );

    return (
      <Drawer 
        open={open} 
        anchor="right"
        variant="persistent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggle}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <MenuList>
          {menuItems}
        </MenuList>
      </Drawer>
    );
  }
}

export default AppDrawer;
