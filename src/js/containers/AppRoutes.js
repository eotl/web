import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import IndexArticle from '../components/wiki/IndexArticle';
import { loadMarkdown } from '../actions/markdownActions';
import { wiki } from '../styles/themes';

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
      let Markdown = this.props.markdown[path];
      if (Markdown == null) {
        if (path.slice(-6) === "/index") {
          Markdown = IndexArticle;
        } else {
          // TODO 404 
          Markdown = 'div';
        }
      }
      if (path.slice(-1) === "/") {
        path = path.slice(0, -1);
      }
      return (
        <Route exact
          key={index}
          path={path}
          render={(routerProps) => (
            <MuiThemeProvider theme={wiki}>
              <Markdown 
                routerProps={routerProps} 
                markdown={this.props.markdown}
              />
            </MuiThemeProvider>
          )} 
        /> 
      ); 
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
