import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ArticleGrid from './ArticleGrid';
import { withStyles } from '@material-ui/core/styles';
import { getSubcategories } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class SubcategoriesSection extends Component {
  render() {
    const { category, markdown } = this.props;
    const subcategories = getSubcategories(markdown, category);
    if (subcategories.length > 0) {
      return [
        <Divider key={0} />,
        <section key={1} >
          <Typography variant="h2">Subcategories</Typography>
          <ArticleGrid articles={subcategories} markdown={markdown} />
        </section>
      ];
    } else {
      return '';
    }
  }
}

export default SubcategoriesSection;
