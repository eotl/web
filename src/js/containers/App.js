import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleAppDrawer } from '../actions/appActions';
import AppLayout from '../components/AppLayout';

@connect((store) => {
    console.log('qwer', store);
  return {
    appDrawerOpen: store.app.appDrawerOpen
  }
}, {
  toggleAppDrawer
})
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <AppLayout
          toggleAppDrawer={this.props.toggleAppDrawer}
          appDrawerOpen={this.props.appDrawerOpen}
        />
      </Router>
    );
  }
}

export default App;
