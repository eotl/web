import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from '../styles/home';
import { defaultTheme, terminal } from '../styles/themes';

class HomePage extends Component {
  render() {
    const { classes, } = this.props;

    return (
      <div>
        <MuiThemeProvider theme={terminal}>
          <CssBaseline />
          <Paper className={classes.bannerWrapper}>
            <div className={classes.banner}>
              <pre>
{'       ____________    ____________    _____________    ___\n'
+'      /  _________/\\  /  ______   /\\  /____   _____/\\  /  /\\\n'
+'     /  /\\________\\/ /  /\\____/  / /  \\___/  /\\____\\/ /  / /\n'
+'    /  /_/______    /  / /   /  / /      /  / /      /  / /\n'
+'   /  _________/\\  /  / /   /  / /      /  / /      /  / /\n'
+'  /  /\\________\\/ /  / /   /  / /      /  / /      /  / /\n'
+' /  /_/______    /  /_/___/  / /      /  / /      /  /_/______\n'
+'/___________/\\  /___________/ /      /__/ /      /___________/\\\n'
+'\\___________\\/  \\___________\\/       \\__\\/       \\___________\\/\n'}
              </pre>
            </div>
            <div>
              <Link to="/connect/" className={classes.bannerLink}>telnet://eotl.org:2010/</Link>
            </div>
          </Paper>
        </MuiThemeProvider>
        <MuiThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <div>
            <h1>Welcome to EotL!</h1>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HomePage);
