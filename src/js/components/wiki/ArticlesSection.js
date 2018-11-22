import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ArticleGrid from './ArticleGrid';
import { withStyles } from '@material-ui/core/styles';
import { getArticles } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class ArticlesSection extends Component {
  render() {
    const { category, markdown, classes } = this.props;
    const articles = getArticles(markdown, category);
    if (articles.length > 0) {
      return [
        <Divider key={0} className={classes.sectionDivider}/>,
        <section key={1} >
          <Typography variant="h2" className={classes.sectionHeader}>
            Articles
          </Typography>
          <ArticleGrid articles={articles} markdown={markdown} />
        </section>
      ];
    } else {
      return '';
    }
  }
}

export default ArticlesSection;
