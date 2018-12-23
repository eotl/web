import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpoilerMenu from '../components/SpoilerMenu';
import { setSpoilerLevel } from '../actions/appActions';

@connect((store) => {
  return {
    spoilerLevel: store.app.spoilerLevel,
  }
}, {
  setSpoilerLevel,
})
class SpoilerLevel extends Component {
  render() {
    const { spoilerLevel, setSpoilerLevel } = this.props;
    
    return (
      <SpoilerMenu spoilerLevel={spoilerLevel} setSpoilerLevel={setSpoilerLevel} />
    );
  }
}

export default SpoilerLevel;
