import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CreateIcon from '@material-ui/icons/Create';
import { withStyles } from '@material-ui/core/styles';
import ArticleHeader from './ArticleHeader';
import { parentPath, getTitle, getDescription } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class StubArticle extends Component {
  render() {
    const { path, toggleWikiDrawer, wikiDrawerOpen, markdown, classes } = this.props;

    const title = getTitle(markdown, path);
    const description = getDescription(markdown, path);
    const parent = parentPath(path);
    const parentTitle = getTitle(markdown, parent);

    return (
      <div>
        <ArticleHeader 
          title={title} 
          description={description} 
          toggle={toggleWikiDrawer}
          open={wikiDrawerOpen}
        />
        <Divider className={classes.sectionDivider}/>
        <Typography variant="body1" component="section">
          {this.props.children}
        </Typography>
        <br/>
        <Paper>
          <Grid container spacing={16}>
            <Grid item>
              <CreateIcon className={classes.createIcon}/>
            </Grid>
            <Grid item xs={12} sm>
              <Typography variant="subtitle1">
                This article related to <Link to={parent}>{parentTitle}</Link> is a stub.
                You can help EotL by <Link to="/wiki/">expanding it</Link>. 
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default StubArticle;
