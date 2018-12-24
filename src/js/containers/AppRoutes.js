import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Play from '../components/Play';
import NotFound from '../components/NotFound';
import WikiNotFound from '../components/wiki/WikiNotFound';
import Wiki from '../containers/Wiki';
import IndexArticle from '../components/wiki/IndexArticle';
import { loadMarkdown } from '../actions/markdownActions';

@withRouter
@connect((store) => {
  return {
    markdown: store.markdown
  }
}, {
  loadMarkdown
})
class AppRoutes extends Component {
  constructor(props) {
    super(props);
    props.loadMarkdown();
  }

  renderMarkdownRoutes(markdown) {
    return Object.keys(markdown).map((path, index) => { 
      let Markdown = markdown[path].component;
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
              <Wiki path={routerProps.match.path} WikiWrapper={Markdown} />
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
          path="/play/"
          render={(routerProps) => <Play/>}
        />
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
