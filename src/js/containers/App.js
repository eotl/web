import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLeftDrawer } from '../actions/appActions';
import AppBar from '@material-ui/core/AppBar';
import AppToolbar from '../components/AppToolbar';
import LeftDrawer from '../components/LeftDrawer';
import AppRoutes from '../components/AppRoutes';
import '../../scss/index.scss';

@connect((store) => {
  return {
    leftDrawerOpen: store.app.leftDrawerOpen
  };
},
)
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <AppBar title={'test'}>
            <AppToolbar toggleLeftDrawer={() => { this.props.dispatch(toggleLeftDrawer()) }}/>
          </AppBar>
          <LeftDrawer open={this.props.leftDrawerOpen} />
          <AppRoutes /> 
        </div>
      </Router>
    );
  }
}

export default App;
