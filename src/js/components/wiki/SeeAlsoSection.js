import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ArticleGrid from './ArticleGrid';
import { withStyles } from '@material-ui/core/styles';
import { getArticlesByName } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class SeeAlsoSection extends Component {
  render() {
    const { see, markdown } = this.props;
    const articles = getArticlesByName(markdown, see);
    console.log('asdf', articles);
    if (articles.length > 0) {
      return [
        <Divider key={0} />,
        <section key={1} >
          <Typography variant="h2">See also</Typography>
          <ArticleGrid articles={articles} markdown={markdown} />
        </section>
      ];
    } else {
      return '';
    }
  }
}

export default SeeAlsoSection;
