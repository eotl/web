import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class ArticleHeader extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <header>
        <Typography variant="h1">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {description}
        </Typography>
      </header>
    );
  }
}

export default ArticleHeader;
