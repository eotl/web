import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppSearchBar from '../components/AppSearchBar';
import { parentPath, getTitle, getDescription } from '../helpers/wikiHelper';
import { isMarkdownSpoiler } from '../helpers/spoilerHelper';

@withRouter
@connect((store) => {
  return {
    markdown: store.markdown,
    spoilerLevel: store.app.spoilerLevel,
  }
})
class AppSearch extends Component {
  render() {
    const { markdown, history, spoilerLevel } = this.props;
    
    const suggestions = Object.keys(markdown)
      .filter(path => {
        return ( 
          path !== '/' 
          && path.slice(-6) !== '/index' 
          && !isMarkdownSpoiler(markdown[path], spoilerLevel)
        );
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
