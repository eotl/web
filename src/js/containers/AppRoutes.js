import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import WikiNotFound from '../components/wiki/WikiNotFound';
import WikiLayout from '../components/wiki/WikiLayout';
import IndexArticle from '../components/wiki/IndexArticle';
import { toggleWikiDrawer } from '../actions/appActions';
import { loadMarkdown } from '../actions/markdownActions';

@withRouter
@connect((store) => {
  return {
    markdown: store.markdown,
    wikiDrawerOpen: store.app.wikiDrawerOpen
  }
}, {
  loadMarkdown,
  toggleWikiDrawer
})
class AppRoutes extends Component {
  constructor(props) {
    super(props);
    props.loadMarkdown();
  }

  renderMarkdownRoutes(markdown) {
    return Object.keys(markdown).map((path, index) => { 
      let Markdown = markdown[path].component;
      if (path.slice(-1) === "/") {
        path = path.slice(0, -1);
      }
      if (path.match(/^\/wiki[/$]?/)) {
        if (Markdown == null) {
          if (path.slice(-6) === "/index" || path.slice(-1) === "/") {
            Markdown = IndexArticle;
          } else {
            Markdown = WikiNotFound;
          }
        }
        return (
          <Route exact
            key={index}
            path={path}
            render={(routerProps) => (
              <WikiLayout 
                path={routerProps.match.path} 
                markdown={this.props.markdown}
                toggleWikiDrawer={this.props.toggleWikiDrawer}
                wikiDrawerOpen={this.props.wikiDrawerOpen}
                >
                <Markdown 
                  path={routerProps.match.path} 
                  markdown={this.props.markdown}
                  toggleWikiDrawer={this.props.toggleWikiDrawer}
                  wikiDrawerOpen={this.props.wikiDrawerOpen}
                />
              </WikiLayout>
            )} 
          /> 
        ); 
      } else {
        return (
          <Route exact
            key={index}
            path={path}
            render={(routerProps) => (
              <Markdown 
                path={routerProps.match.path} 
                markdown={this.props.markdown}
              />
            )} 
          /> 
        ); 
      }
    });
  }

  render() {
    return (
      <Switch>
        {this.renderMarkdownRoutes(this.props.markdown)}
        <Route exact
          path="/"
          render={(routerProps) => <Home/>}
        />
        <Route
          path="*"
          render={(routerProps) => <NotFound/>}
        />
      </Switch>
    );
  }
}

export default AppRoutes;
