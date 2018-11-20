import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLeftDrawer } from '../actions/appActions';
import Layout from '../components/Layout';

@connect((store) => {
  return {
    leftDrawerOpen: store.app.leftDrawerOpen
  }
}, {
  toggleLeftDrawer
})
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Layout
          toggleLeftDrawer={this.props.toggleLeftDrawer}
          leftDrawerOpen={this.props.leftDrawerOpen}
        />
      </Router>
    );
  }
}

export default App;
