import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/wiki';

class ArticleHeader extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <header>
        <Typography variant="h1">
          Category: {title}
        </Typography>
        <Typography variant="subtitle2">
          {description}
        </Typography>
      </header>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ArticleHeader);
