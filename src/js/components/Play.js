import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LaunchIcon from '@material-ui/icons/LaunchTwoTone';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import styles from '../styles/play';
import { defaultTheme } from '../styles/themes';

@withStyles(styles, { withTheme: true })
class Play extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <MuiThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Paper>
            <Grid container spacing={16}>
              <Grid item>
                <LaunchIcon className={classes.launchIcon}/>
              </Grid>
              <Grid item xs={12} sm>
                <Typography variant="subtitle1">
                  The new web client is under development, but you can still use the old client at 
                  &nbsp;<a href="http://eotl.panterasbox.com" target="_blank" rel="noopener noreferrer">eotl.panterasbox.com</a>. 
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Play;
