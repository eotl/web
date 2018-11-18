import React, { Component } from 'react';

class Wiki extends Component {
  render() {
    return (
      <div><h3>hyah</h3>
      <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Wiki;
