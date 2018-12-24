import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SpoilerIcon from '@material-ui/icons/RemoveRedEye';
import { withStyles } from '@material-ui/core/styles';
import { SpoilerLevels } from '../../helpers/spoilerHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class SpoilerPlaceholder extends Component {
  render() {
    const { classes, level } = this.props;
    let { placeholder } = this.props;

    if (!(level in SpoilerLevels)) {
      return ('');
    }

    if (typeof placeholder !== "string") {
      placeholder = SpoilerLevels[level].label + " spoiler hidden.";
    }

    return (
      <span className={classes[level + "Placeholder"]}>
        <SpoilerIcon className={classes.placeholderIcon}/>
        <Typography className={classes.placeholder} variant="body1" component="span">
          {placeholder}
        </Typography>
      </span>
    );
  }
}

export default SpoilerPlaceholder;
