import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { getSubcategories } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class SubcategoriesSection extends Component {
  render() {
    const { category, markdown } = this.props;
    const subcategories = getSubcategories(markdown, category);
    console.log(subcategories);
    return [
      <Divider/>,
      <section>
        <Typography variant="h2">Subcategories</Typography>
      </section>
    ];
  }
}

export default SubcategoriesSection;
