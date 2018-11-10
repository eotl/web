import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Wiki from './Wiki';

const WikiPage = ({match}) => {
  return (<Wiki page={`${match.url}`} />);
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/wiki/index">Wiki</Link>
          <Route path="/wiki/**" component={WikiPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
