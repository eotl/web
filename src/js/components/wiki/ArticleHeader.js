import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SpoilerIcon from '@material-ui/icons/RemoveRedEye';
import { withStyles } from '@material-ui/core/styles';
import WikiBreadcrumbs from './WikiBreadcrumbs';
import { getTitle, getDescription, getSpoilerLevel } from '../../helpers/wikiHelper';
import { SpoilerLevels } from '../../helpers/spoilerHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class ArticleHeader extends Component {
  render() {
    const { path, markdown, toggle, open, classes, theme } = this.props;

    const title = getTitle(markdown, path);
    const description = getDescription(markdown, path);
    const spoilerLevel = getSpoilerLevel(markdown, path);

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
        <header className={classes.articleHeader}>
          <WikiBreadcrumbs markdown={markdown} path={path} />
          <div className={classes.headerFlexbox}>
            <Typography className={classes.headerHeader} variant="h1">
              {title}
            </Typography>
            <Tooltip 
              title={
                <React.Fragment>
                  Article spoiler level is&nbsp;
                  <span className={classes[spoilerLevel + "Spoiler"]}>
                    {SpoilerLevels[spoilerLevel].label}
                  </span>.
                </React.Fragment>
              }
              classes={{ tooltip: classes.lightTooltip }}
            >
              <SpoilerIcon className={classes[spoilerLevel + "Spoiler"]} />
            </Tooltip>
          </div>
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
