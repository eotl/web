import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import ArticleHeader from './ArticleHeader';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class DefaultArticle extends Component {
  render() {
    const { frontMatter } = this.props;

    return (
      <article>
        <ArticleHeader 
          title={frontMatter.title} 
          description={frontMatter.description} 
        />
        <Divider/>
        <Typography variant="body1" component="section">
          {this.props.children}
        </Typography>
      </article>
    );
  }
}

export default DefaultArticle;
