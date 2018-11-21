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
    return Object.keys(markdown).map((md, index) => { 
      let Markdown = this.props.markdown[md];
      if (Markdown == null) {
        if (md.slice(-6) === "/index") {
          Markdown = IndexArticle;
        } else {
          Markdown = 'div';
        }
      }
      // if (path.slice(-1) === "/") {
      // }
      return (
        <Route exact
          key={index}
          path={md}
          render={(routerProps) => (
            <MuiThemeProvider theme={wiki}>
              <Markdown routerProps={routerProps} />
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
