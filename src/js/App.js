import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import '../scss/wiki.scss';

class App extends Component {
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
      <Router>
        <div>
          <Link to="/wiki/index">Wiki</Link>
          <Link to="/wiki/bogleg">Bogleg</Link>
          <RouteHook
             path="/wiki/**"
             onEnter={this.fetchWiki} 
             onChange={this.shouldFetchWiki}
             render={(routerProps) => <div className="wiki"><this.state.wiki /></div>} 
          />
        </div>
      </Router>
    );
  }
}

export default App;
