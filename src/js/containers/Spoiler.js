import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpoilerPlaceholder from '../components/wiki/SpoilerPlaceholder';
import { isSpoiler } from '../helpers/spoilerHelper';

@connect((store) => {
  return {
    spoilerLevel: store.app.spoilerLevel,
  }
})
class Spoiler extends Component {

  render() {
    const { spoilerLevel, level, placeholder } = this.props;
    if (isSpoiler(level, spoilerLevel)) {
      if (placeholder) {
        return (<SpoilerPlaceholder level={level} placeholder={placeholder} />);
      } else {
        return '';
      }
    } else {
      return this.props.children;
    }
  }
}

export default Spoiler;
