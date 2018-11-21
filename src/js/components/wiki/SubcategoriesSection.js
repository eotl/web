import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class SubcategoriesSection extends Component {

  getSubcategories() {
    const { category, markdown } = this.props;
    const regex = new RegExp("^" + category + "[^/]+/$");
    let subcategories = Object.keys(markdown).filter((path) => {
      return path.match(regex);
    });
    subcategories = subcategories.map((path) => {
      return {
        path: path,
        markdown: markdown[path]
      }
    })
    console.log(markdown['/wiki/index']);
  }

  render() {
    const subcategories = this.getSubcategories();
    return [
      <Divider/>,
      <section>
        <Typography variant="h2">Subcategories</Typography>
      </section>
    ];
  }
}

export default SubcategoriesSection;
