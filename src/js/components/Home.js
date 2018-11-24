import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import styles from '../styles/home';
import { defaultTheme, terminal } from '../styles/themes';

@withStyles(styles, { withTheme: true })
class Home extends Component {
  render() {
    const { classes, } = this.props;

    return (
      <div>
        <MuiThemeProvider theme={terminal}>
          <CssBaseline />
          <Paper square={true} className={classes.bannerWrapper}>
            <div className={classes.banner}>
              <div className={classes.bannerText}>
                <Typography variant="body1" component="pre">
  {'       ____________    ____________    _____________    ___\n'
  +'      /  _________/\\  /  ______   /\\  /____   _____/\\  /  /\\\n'
  +'     /  /\\________\\/ /  /\\____/  / /  \\___/  /\\____\\/ /  / /\n'
  +'    /  /_/______    /  / /   /  / /      /  / /      /  / /\n'
  +'   /  _________/\\  /  / /   /  / /      /  / /      /  / /\n'
  +'  /  /\\________\\/ /  / /   /  / /      /  / /      /  / /\n'
  +' /  /_/______    /  /_/___/  / /      /  / /      /  /_/______\n'
  +'/___________/\\  /___________/ /      /__/ /      /___________/\\\n'
  +'\\___________\\/  \\___________\\/       \\__\\/       \\___________\\/\n'}
                </Typography>
              </div>
              <div className={classes.bannerCaption}>
                <Typography variant="subtitle2" component="div">
                  Since 1989 <span style={{color: 'white'}}>|</span> <Link to="/play/" className={classes.bannerLink}>telnet://eotl.org:2010/</Link>
                </Typography>
              </div>
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

export default Home;
