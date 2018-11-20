import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import ArticleHeader from './ArticleHeader';
import SubcategoriesSection from './SubcategoriesSection';
import ArticlesSection from './ArticlesSection';
import SeeAlsoSection from './SeeAlsoSection';
import styles from '../../styles/wiki';

class IndexArticle extends Component {
  render() {
    const { frontMatter } = this.props;
    console.log(this.props);
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
        <SubcategoriesSection category={''} />
        <ArticlesSection category={''} />
        <SeeAlsoSection articles={''} />
      </article>
    );
  }
}

export default withStyles(styles, { withTheme: true })(IndexArticle);
