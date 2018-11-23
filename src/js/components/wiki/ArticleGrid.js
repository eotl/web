import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { getTitle, getDescription } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class ArticleGrid extends Component {
  render() {
    const { articles, markdown, classes } = this.props;
    return (
     <div className={classes.articleGrid}>
        <Grid container spacing={24} >
          { articles.map((article, index) => {
            let title = getTitle(markdown, article.path);
            let description = getDescription(markdown, article.path);
            return (
              <Grid key={index} item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <Link to={article.path} className={classes.articleGridLink}>
                  <Paper className={classes.articleGridPaper}>
                    <Typography variant="button" className={classes.articleGridCopy}>
                      {title}
                    </Typography>
                    { description 
                      ? <Typography variant="caption"  className={classes.articleGridCopy}>
                          {description}
                        </Typography>
                      : ''
                    }
                  </Paper>
                </Link>
              </Grid>
            );
          }) }
        </Grid>
      </div>
    );
  }
}

export default ArticleGrid;
