import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppToolbar from './AppToolbar';
import LeftDrawer from './LeftDrawer';
import AppRoutes from '../containers/AppRoutes';
import classNames from 'classnames';
import styles from '../styles/layout';
import { defaultTheme } from '../styles/themes';

class Layout extends Component {
  render() {
    const { classes, toggleLeftDrawer, leftDrawerOpen } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <AppBar 
            position="fixed"
            title={'test'}
            className={classNames(classes.appBar, { 
              [ classes.appBarShift ]: leftDrawerOpen
            })}
          >
            <AppToolbar 
              leftDrawerOpen={leftDrawerOpen} 
              toggleLeftDrawer={toggleLeftDrawer} 
            />
          </AppBar>
          <LeftDrawer 
            open={leftDrawerOpen} 
            toggle={toggleLeftDrawer}
          />
          <main
            className={classNames(classes.content, {
              [ classes.contentShift ] : leftDrawerOpen
            })}
          >
            <div className={classes.drawerHeader} />
            <div>
              <AppRoutes />
            </div>
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
