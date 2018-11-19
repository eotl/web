import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/wiki';

class Wiki extends Component {
  render() {
    console.log(this.props);
    return (
      <article>
        <header>
          <Typography variant="h1">
            Bogleg
          </Typography>
          <Typography variant="subtitle2">
            Almighty bogleg.
          </Typography>
        </header>
        <Divider/>
        <Typography variant="body1" component="div">
          {this.props.children}
        </Typography>
        <Divider/>
        <section>
          <Typography variant="h2">Subcategories</Typography>
        </section>
        <Divider/>
        <section>
          <Typography variant="h2">Pages</Typography>
        </section>
        <Divider/>
        <section>
          <Typography variant="h2">See also</Typography>
        </section>
      </article>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Wiki);
