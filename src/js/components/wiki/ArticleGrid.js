import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { getTitle, getDescription } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class ArticleGrid extends Component {
  render() {
    const { articles, markdown, classes } = this.props;
    return (
     <div className={classes.articleGrid.root}>
        <Grid container spacing={24} classes={{ container: classes.articleGrid.paper, item: classes.articleGrid.paper  }}>
          { articles.map((article, index) => {
            let title = getTitle(markdown, article.path);
            let description = getDescription(markdown, article.path);
            return (
              <Grid key={index} item xs={3}>
                <Paper className={classes.articleGrid.paper}>
                  <Typography variant="button">
                    {title}
                  </Typography>
                  { description 
                    ? <Typography variant="caption">
                        {description}
                      </Typography>
                    : ''
                  }
                </Paper>
              </Grid>
            );
          }) }
        </Grid>
      </div>
    );
  }
}

export default ArticleGrid;
