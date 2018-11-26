import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppSearchBar from '../components/AppSearchBar';
import { parentPath, getTitle, getDescription } from '../helpers/wikiHelper';

@withRouter
@connect((store) => {
  return {
    markdown: store.markdown,
  }
})
class AppSearch extends Component {
  render() {
    const { markdown, history } = this.props;
    
    const suggestions = Object.keys(markdown)
      .filter(path => {
        return ( path !== '/' && path.slice(-6) !== '/index' );
      })
      .map(path => {
        return {
          path: path,
          title: getTitle(markdown, path),
          description: getDescription(markdown, path),
          parentTitle: getTitle(markdown, parentPath(path)),
        }
      })
      .sort((a, b) => {
        return a.title > b.title;
      });

    return (
      <AppSearchBar suggestions={suggestions} history={history} />
    );
  }
}

export default AppSearch;
