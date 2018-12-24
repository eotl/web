import React, { Component } from 'react';
import { connect } from 'react-redux';
import WikiLayout from '../components/wiki/WikiLayout';
import { toggleWikiDrawer } from '../actions/appActions';

@connect((store) => {
  return {
    spoilerLevel: store.app.spoilerLevel,
    wikiDrawerOpen: store.app.wikiDrawerOpen,
    markdown: store.markdown,
  }
}, {
  toggleWikiDrawer,
})
class Wiki extends Component {
  render() {
    const { WikiWrapper, path, markdown, spoilerLevel,
            wikiDrawerOpen, toggleWikiDrawer } = this.props;
    
    return (
      <WikiLayout 
        path={path}
        markdown={markdown}
        wikiDrawerOpen={wikiDrawerOpen}
        toggleWikiDrawer={toggleWikiDrawer}
        spoilerLevel={spoilerLevel}
      >
        <WikiWrapper 
          path={path}
          markdown={markdown}
          wikiDrawerOpen={wikiDrawerOpen}
          toggleWikiDrawer={toggleWikiDrawer}
        />
      </WikiLayout>
    );
  }
}

export default Wiki;
