import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class ArticleHeader extends Component {
  render() {
    const { title, description, toggle, open, classes, theme } = this.props;
    return (
      <div className={classes.headerWrapper}>
        <IconButton 
          onClick={toggle} 
          color="inherit" 
          aria-label="Open drawer"
          className={classNames(classes.headerIcon, open && classes.hide)}
        >
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <header classes={classes.articleHeader}>
          <Typography variant="h1">
            {title}
          </Typography>
          { description 
            ? <Typography variant="subtitle2">
                {description}
              </Typography>
            : ''
          }
        </header>

      </div>
    );
  }
}

export default ArticleHeader;
