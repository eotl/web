import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import ArticleHeader from './ArticleHeader';
import SeeAlsoSection from './SeeAlsoSection';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class BasicArticle extends Component {
  render() {
    const { path, toggleWikiDrawer, wikiDrawerOpen, frontMatter, markdown, classes } = this.props;

    let see = [ ];
    if (frontMatter && frontMatter.see) {
      see = frontMatter.see;
    }

    return (
      <div>
        <ArticleHeader 
          path={path} 
          markdown={markdown} 
          toggle={toggleWikiDrawer}
          open={wikiDrawerOpen}
        />
        <Divider className={classes.sectionDivider}/>
        <Typography variant="body1" component="section">
          {this.props.children}
        </Typography>
        <SeeAlsoSection 
          see={see} 
          markdown={markdown} /> 
      </div>
    );
  }
}

export default BasicArticle;
