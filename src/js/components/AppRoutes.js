import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RouteHook from 'react-route-hook';

class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = { 'wiki' : 'div' };
    this.fetchWiki = this.fetchWiki.bind(this);
    this.shouldFetchWiki = this.shouldFetchWiki.bind(this);
  }

  fetchWiki(props) {
    import('../md' + props.match.url + '.md').then((page) => { 
      this.setState({ 'wiki': page.default });
    });
  }

  shouldFetchWiki(newProps, oldProps) {
    if (oldProps.match.url !== newProps.match.url) {
      this.fetchWiki(newProps)
    }
  }

  render() {
    return (
      <div>
        <RouteHook
           path="/wiki/**"
           onEnter={this.fetchWiki} 
           onChange={this.shouldFetchWiki}
           render={(routerProps) => <div className="wiki"><this.state.wiki /></div>} 
        />
      </div>
    );
  }
}

export default AppRoutes;
