import React, { Component } from 'react';
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
    this.setState(...this.state, { open: !this.state.open });
  }

  renderContents(contents,) {
    const { classes } = this.props;
    if (!contents) {
      return '';
    }
    return (
      <Typography variant="body2" component="ol">
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
    const { path, markdown, depth } = this.props;

    const headers = getHeaders(markdown, path, depth);
    if (headers.length > 0) {
      return (
        <Paper>
          <div>Contents [<button onClick={this.toggleContents}>hide</button>]</div>
          {this.renderContents(headers)}
        </Paper>
      );
    } else {
      return '';
    }
  }
}

export default TableOfContents;
