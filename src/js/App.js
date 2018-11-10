import React, { Component } from 'react';
import Wiki from '../md/wiki/index.md';
import '../scss/wiki.scss';

class App extends Component {
  render() {
    return (
      <div className="wiki">
        <Wiki />
      </div>
    );
  }
}

export default App;
