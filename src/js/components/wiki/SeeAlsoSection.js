import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class SeeAlsoSection extends Component {
  render() {
    const { frontMatter } = this.props;
    return [
      <Divider/>,
      <section>
        <Typography variant="h2">See also</Typography>
      </section>
    ];
  }
}

export default SeeAlsoSection;
