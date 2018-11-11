import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import PageNotFound from './PageNotFound';

class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = { 'markdown' : 'div' };
  }

  fetchMarkdown(props) {
    import('../../md' + props.match.url + 'index.md')
      .then((page) => { 
        this.setState({ 'markdown': page.default });
      })
      .catch((error) => {
        import('../../md' + props.match.url + '.md')
          .then((page) => { 
            this.setState({ 'markdown': page.default });
          })
          .catch((error) => {
            this.setState({ 'markdown': PageNotFound })
          });
      });
  }

  shouldFetchMarkdown(newProps, oldProps) {
    if (oldProps.match.url !== newProps.match.url) {
      this.fetchMarkdown(newProps)
    }
  }

  render() {
    return (
      <Switch>
        <RouteHook
          path="/wiki/**"
          onEnter={this.fetchMarkdown.bind(this)} 
          onChange={this.shouldFetchMarkdown.bind(this)}
          render={(routerProps) => <this.state.markdown />} 
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
