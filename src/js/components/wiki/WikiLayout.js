import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import WikiDrawer from './WikiDrawer';
import classNames from 'classnames';
import styles from '../../styles/wikiLayout';
import { wiki } from '../../styles/themes';

@withStyles(styles, { withTheme: true })
class WikiLayout extends Component {
  render() {
    const { path, markdown, classes, 
            spoilerLevel, toggleWikiDrawer, wikiDrawerOpen } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={wiki}>
          <CssBaseline />
          <article
            className={classNames(classes.content, {
              [ classes.contentShift ] : wikiDrawerOpen
            })}
          >
            {this.props.children}
          </article>
          <WikiDrawer 
            open={wikiDrawerOpen} 
            toggle={toggleWikiDrawer}
            path={path}
            markdown={markdown}
            spoilerLevel={spoilerLevel}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default WikiLayout;
