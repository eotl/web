import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

class AppToolbar extends Component {
  render() {
    return (
      <Toolbar>
        <IconButton  onClick={this.props.toggleLeftDrawer} aria-label="Open drawer">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" noWrap>
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

export default AppToolbar;
