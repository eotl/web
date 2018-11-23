import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import ArticleHeader from './ArticleHeader';
import SubcategoriesSection from './SubcategoriesSection';
import ArticlesSection from './ArticlesSection';
import SeeAlsoSection from './SeeAlsoSection';
import { mungeCategory, getTitle, getDescription } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class IndexArticle extends Component {
  render() {
    const { frontMatter, path, markdown, classes } = this.props;

    let category = mungeCategory(markdown, path);
    let title = getTitle(markdown, category);
    let description = getDescription(markdown, category);
    let see = [ ];
    if (frontMatter && frontMatter.see) {
      see = frontMatter.see;
    }
     
    return (
      <div>
        <ArticleHeader 
          title={title} 
          description={description} 
        />
        <Divider className={classes.sectionDivider}/>
        <Typography variant="body1" component="section">
          {this.props.children}
        </Typography>
        <SeeAlsoSection 
          see={see} 
          markdown={markdown} /> 
        <SubcategoriesSection 
          category={category} 
          markdown={markdown} 
        />
        <ArticlesSection 
          category={category} 
          markdown={markdown}
        />
      </div>
    );
  }
}

export default IndexArticle;
