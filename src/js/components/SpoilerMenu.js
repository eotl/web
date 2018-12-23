import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SpoilerIcon from '@material-ui/icons/RemoveRedEye';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/appLayout';
import { SpoilerLevels, getLevelArray } from '../helpers/spoilerHelper';

@withStyles(styles, { withTheme: true })
class SpoilerMenu extends Component {
  constructor() {
    super();
    this.state = { 
      menuOpen: false,
      menuAnchor: null,
    };
    this.setLevel = this.setLevel.bind(this);
  }

  toggleMenu(event) {
    this.setState({ 
      menuOpen: !this.state.menuOpen,
      menuAnchor: (this.state.menuOpen ? null : event.currentTarget)
    });
  }

  closeMenu() {
    this.setState({
      menuOpen: false,
      menuAnchor: null,
    })
  }

  setLevel(level) {
    this.props.setSpoilerLevel(level);
    this.closeMenu();
  }

  render() {
    const { classes, spoilerLevel } = this.props;
    return (
      <div>
        <Tooltip 
          title={
            <React.Fragment>
              Spoiler level currently set to&nbsp;
              <span className={classes[spoilerLevel + "Spoiler"]}>
                {SpoilerLevels[spoilerLevel].label}
              </span>.
            </React.Fragment>
          }
          classes={{ tooltip: classes.lightTooltip }}
        >
          <IconButton 
            onClick={this.toggleMenu.bind(this)} 
            color="inherit" 
            aria-label="Set spoiler level"
            className={classes.menuButton}
          >
            <SpoilerIcon className={classes[spoilerLevel + "Spoiler"]} />
          </IconButton>
        </Tooltip>
        <Menu 
          open={this.state.menuOpen}
          anchorEl={this.state.menuAnchor}
          onClose={this.closeMenu.bind(this)}
        >
          <ListSubheader inset >Spoiler Level</ListSubheader>
          { getLevelArray().map((level, index) => {
            return (
              <MenuItem 
                key={index} 
                className={classes.menuItem} 
                selected={spoilerLevel === level.id}
                disabled={level.id === "wizard"}
                onClick={() => this.setLevel(level.id)}
              >
                <ListItemIcon className={classes.icon}>
                  <SpoilerIcon className={classes[level.id + "Spoiler"]} />
                </ListItemIcon>
                <ListItemText 
                  inset 
                  classes={{ primary: classes.primary }} 
                  className={classes[level.id + "Spoiler"]}
                  primary={level.label} 
                />
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    );
  }
}

export default SpoilerMenu;
