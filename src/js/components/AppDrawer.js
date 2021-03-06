import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftTwoTone';
import ChevronRightIcon from '@material-ui/icons/ChevronRightTwoTone';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/HomeTwoTone';
import ComputerIcon from '@material-ui/icons/ComputerTwoTone';
import InfoIcon from '@material-ui/icons/InfoTwoTone';
import HelpIcon from '@material-ui/icons/HelpTwoTone';
import PeopleIcon from '@material-ui/icons/PeopleTwoTone';
import ArchiveIcon from '@material-ui/icons/ArchiveTwoTone';
import styles from '../styles/appLayout';

@withStyles(styles, { withTheme: true })
class AppDrawer extends Component {
  render() {
    const { theme, classes, open, toggle} = this.props;

    const menuItems = [
      [ '/', "Home", <HomeIcon/> ],
      [ '/play/', "Play", <ComputerIcon/> ],
      [ '/news/', "News", <InfoIcon/> ],
      [ '/wiki/', "Wiki", <HelpIcon/> ],
      [ '/community/', "Community", <PeopleIcon/> ],
      [ '/archive/', "Archive", <ArchiveIcon/> ]
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
        anchor="left"
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
