import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import RouteHook from 'react-route-hook';
import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import markdownIndex from '../../markdown.json';
import { wiki } from '../styles/themes';

class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = { 'markdown' : 'div' };
    this.fetchMarkdown = this.fetchMarkdown.bind(this);
    this.shouldFetchMarkdown = this.shouldFetchMarkdown.bind(this);
  }

  fetchMarkdown(props) {
    let match = props.match.url;
    match = match.replace(/\/*$/, '');
    if (markdownIndex[match]) {
      import('../../md' + match + '.md')
        .then((page) => { 
          this.setState({ 'markdown': page.default });
        })
        .catch((error) => {
          this.setState({ 'markdown': PageNotFound })
        });
    } else if (markdownIndex[match + '/index']) {
      import('../../md' + match + '/index.md')
        .then((page) => { 
          this.setState({ 'markdown': page.default });
        })
        .catch((error) => {
          this.setState({ 'markdown': PageNotFound })
        });
    } else {
      this.setState({ 'markdown': PageNotFound })
    }
  }

  shouldFetchMarkdown(newProps, oldProps) {
    if (oldProps.match.url !== newProps.match.url) {
      this.fetchMarkdown(newProps)
    }
  }

  render() {
    let markdownRoutes = Object.keys(markdownIndex).map((md, index) => { 
      return (
        <RouteHook exact
          key={index}
          path={md}
          onEnter={this.fetchMarkdown} 
          onChange={this.shouldFetchMarkdown}
          render={(routerProps) => (
            <MuiThemeProvider theme={wiki}>
              <this.state.markdown />
            </MuiThemeProvider>
          )} 
        /> 
      ); 
    });
    let markdownIndexes = Object.keys(markdownIndex).map((md, index) => { 
      if (md.slice(-6) === '/index') {
        return (
          <RouteHook exact
            key={index}
            path={md.slice(0, -6)}
            onEnter={this.fetchMarkdown} 
            onChange={this.shouldFetchMarkdown}
            render={(routerProps) => (
              <MuiThemeProvider theme={wiki}>
                <this.state.markdown />
              </MuiThemeProvider>
            )} 
          />
        );
      } else {
        return '';
      }
    });
    return (
      <Switch>
        {markdownRoutes}
        {markdownIndexes}
        <Route exact
          path="/"
          render={(routerProps) => <HomePage />}
        />
        <Route
          path="*"
          render={(routerProps) => <PageNotFound />}
        />
      </Switch>
    );
  }
}

export default AppRoutes;
