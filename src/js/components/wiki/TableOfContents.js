import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { getHeaders } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class TableOfContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.toggleContents = this.toggleContents.bind(this);
  }

  toggleContents() {
    this.setState({ ...this.state, open: !this.state.open });
  }

  renderContents(contents,) {
    const { classes } = this.props;
    if (!contents) {
      return '';
    }
    return (
      <Typography variant="body1" component="ol">
        { contents.map((item, index) => {
          return (
            <li key={index}>
              <a href={'#' + item.slug} className={classes.plainLink}>
                {item.text}
              </a>
              {this.renderContents(item.children)}
            </li>
          );
        })}
      </Typography>
    )
  }

  render() {
    const { path, markdown, depth, classes } = this.props;

    const headers = getHeaders(markdown, path, depth);
    if (headers.length > 0) {
      return (
        <Paper component='div' className={classes.tocPaper}>
          <Typography variant="body2" component="div" className={classNames(this.state.open && classes.tocHeaderOpen)}>
            Contents&nbsp;[
              <button 
                className={classes.tocHide} 
                onClick={this.toggleContents}>
                {this.state.open ? 'hide' : 'show'}
              </button>]
          </Typography>
          <div className={classNames(classes.tableOfContents, 
                          !this.state.open && classes.hide)}>
            {this.renderContents(headers)}
          </div>
        </Paper>
      );
    } else {
      return '';
    }
  }
}

export default TableOfContents;
