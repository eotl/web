import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftTwoTone';
import ChevronRightIcon from '@material-ui/icons/ChevronRightTwoTone';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { escapePath, resolvePath, mungeCategory, 
         getChildren, getTitle } from '../../helpers/wikiHelper';
import { isMarkdownSpoiler } from '../../helpers/spoilerHelper';
import styles from '../../styles/wikiLayout';
import { wikiMenu } from '../../styles/themes';

@withStyles(styles, { withTheme: true })
class WikiDrawer extends Component {
  constructor(props) {
    super(props);

    const resolvedPath = resolvePath(props.markdown, props.path);
    let menu = { };
    Object.keys(props.markdown).forEach(path => {
      if (resolvedPath.match('^' + escapePath(path))) {
        menu[path] = true;
      } else {
        menu[path] = false;
      }
    });
    this.state = { menu };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(path) {
    this.setState(state => {
      state = { ...state };
      state.menu[path] = !state.menu[path];
      return state;
    });
  }

  renderMenuItems(category) {
    const { markdown, classes, spoilerLevel } = this.props;
    const children = getChildren(markdown, category);
    const path = resolvePath(markdown, this.props.path);

    return children
      .filter(child => !isMarkdownSpoiler(child, spoilerLevel))
      .map((child, index) => {
        if (child.isCategory) {
          const category = mungeCategory(markdown, child.path);
          return (
            <div key={index}>
              <MenuItem 
                button 
                onClick={() => this.toggleMenu(child.path)} 
                className={classNames(classes.menuItem, 
                  path === category && classes.menuItemSelected
              )}>
                <ListItemText primary={getTitle(markdown, child.path)} />
                {this.state.menu[child.path] ? <ExpandLess /> : <ExpandMore />}
              </MenuItem>
              <Collapse in={this.state.menu[child.path]} timeout="auto" unmountOnExit>
                <MenuList component="ul" className={classes.menuList} disablePadding>
                  {this.renderMenuItems(category)}
                </MenuList>
              </Collapse>
            </div>
          );
        } else {
          return (
            <Link key={index} to={child.path} className={classes.menuLink}>
              <MenuItem
                className={classNames(classes.menuItem, 
                  path === child.path && classes.menuItemSelected
              )}>
                <ListItemText 
                  classes={{ primary: classes.primary }} 
                  primary={getTitle(markdown, child.path)} />
              </MenuItem>
            </Link>
          );
        }
      });
  }

  render() {
    const { theme, classes, open, toggle} = this.props;

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
        <div className={classes.drawerHeader}/>
        <div className={classes.drawerSubHeader}>
          <IconButton onClick={toggle}>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <MuiThemeProvider theme={wikiMenu}>
          <MenuList component="ul" disablePadding>
            {this.renderMenuItems("/wiki/", )}
          </MenuList>
        </MuiThemeProvider>
      </Drawer>
    );
  }
}

export default WikiDrawer;
