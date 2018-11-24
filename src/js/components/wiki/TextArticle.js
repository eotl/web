import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CreateIcon from '@material-ui/icons/CreateTwoTone';
import { withStyles } from '@material-ui/core/styles';
import ArticleHeader from './ArticleHeader';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class TextArticle extends Component {
  render() {
    const { path, toggleWikiDrawer, wikiDrawerOpen, markdown, classes } = this.props;

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
          <pre className={classes.textSection}>
            {this.props.children}
          </pre>
        </Typography>
        <br/>
        <Paper>
          <Grid container spacing={16}>
            <Grid item>
              <CreateIcon className={classes.createIcon}/>
            </Grid>
            <Grid item xs={12} sm>
              <Typography variant="subtitle1">
                This article was written in plain text, most likely copied from the MUD.
                You can help EotL by <Link to="/wiki/">converting it</Link> to Markdown. 
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default TextArticle;
