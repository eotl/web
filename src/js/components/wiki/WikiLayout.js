import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import WikiDrawer from './WikiDrawer';
import styles from '../../styles/layout';
import { wiki } from '../../styles/themes';

@withStyles(styles, { withTheme: true })
class WikiLayout extends Component {
  render() {
    const { classes, toggleAppDrawer, appDrawerOpen } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={wiki}>
          <CssBaseline />
          <WikiDrawer 
            open={appDrawerOpen} 
            toggle={toggleAppDrawer}
          />
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default WikiLayout;
