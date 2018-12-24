import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { withStyles } from '@material-ui/core/styles';
import { getBreadcrumbs, getTitle } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class WikiBreadcrumbs extends Component {
  render() {
    const { path, markdown, classes } = this.props;
    const breadcrumbs = getBreadcrumbs(markdown, path);
    if (breadcrumbs.length > 0) {
      return (
        <Typography variant="h6" component="ul" className={classes.breadcrumbs}>
          { breadcrumbs.map((crumb, index) => {
            let delim = '';
            if (index !== 0) {
              delim = (
                <li key={'spacer' + index} className={classes.breadcrumb}>
                  <ArrowRightIcon/>
                </li>
              );
            }
            return [
              delim,
              <li key={index} className={classes.breadcrumb}>
                <Link to={crumb} className={classes.plainLink}>
                  {getTitle(markdown, crumb)}
                </Link>
              </li>
            ];
          }).flat()}
        </Typography>
      );
    } else {
      return '';
    }
  }
}

export default WikiBreadcrumbs;
