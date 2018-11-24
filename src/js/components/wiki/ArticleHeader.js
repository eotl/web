import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import WikiBreadcrumbs from './WikiBreadcrumbs';
import { getTitle, getDescription } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class ArticleHeader extends Component {
  render() {
    const { path, markdown, toggle, open, classes, theme } = this.props;

    const title = getTitle(markdown, path);
    const description = getDescription(markdown, path);

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
          <WikiBreadcrumbs markdown={markdown} path={path} />
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
