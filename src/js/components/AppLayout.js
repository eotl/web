import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppToolbar from './AppToolbar';
import AppDrawer from './AppDrawer';
import AppRoutes from '../containers/AppRoutes';
import classNames from 'classnames';
import styles from '../styles/appLayout';
import { defaultTheme } from '../styles/themes';

@withStyles(styles, { withTheme: true })
class AppLayout extends Component {
  render() {
    const { classes, toggleAppDrawer, appDrawerOpen } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <AppBar 
            position="fixed"
            title={'test'}
            className={classNames(classes.appBar, { 
              [ classes.appBarShift ]: appDrawerOpen
            })}
          >
            <AppToolbar 
              appDrawerOpen={appDrawerOpen} 
              toggleAppDrawer={toggleAppDrawer} 
            />
          </AppBar>
          <AppDrawer 
            open={appDrawerOpen} 
            toggle={toggleAppDrawer}
          />
          <main
            className={classNames(classes.content, {
              [ classes.contentShift ] : appDrawerOpen
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

export default AppLayout;
