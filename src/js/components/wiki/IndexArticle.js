import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import ArticleHeader from './ArticleHeader';
import SubcategoriesSection from './SubcategoriesSection';
import ArticlesSection from './ArticlesSection';
import SeeAlsoSection from './SeeAlsoSection';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class IndexArticle extends Component {
  render() {
    const { frontMatter, routerProps, markdown } = this.props;
    console.log(this.props);
 
    let category = routerProps.match.path;
    if (category + "/" in markdown) {
      category += "/";
    }
    if (category.slice(0, -6) === "/index") {
      category = category.slice(0, -5);
    }
 
    let see = [ ];
    if (frontMatter && frontMatter.see) {
      see = frontMatter.see;
    }
    
    return (
      <article>
        <ArticleHeader 
          type={'Category'}
          title={frontMatter.title} 
          description={frontMatter.description} 
        />
        <Divider/>
        <Typography variant="body1" component="section">
          {this.props.children}
        </Typography>
        <SubcategoriesSection 
          category={category} 
          markdown={markdown} 
        />
        <ArticlesSection 
          category={category} 
          markdown={markdown}
        />
        { see.length > 0 
          ? <SeeAlsoSection see={see} markdown={markdown} /> 
          : '' }
      </article>
    );
  }
}

export default IndexArticle;
