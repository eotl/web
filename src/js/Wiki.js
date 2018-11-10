import React, { Component } from 'react';
import '../scss/wiki.scss';

class Wiki extends Component {

  constructor(props) {
    super(props);
    this.state = { 'page': 'div' };
  }

  componentDidMount() {
    import('../md' + this.props.page + '.md').then((page) => { 
      this.setState({'page': page.default});
    });
  }

  render() {
    const Page = this.state.page;
    return (
      <div className="wiki">
        <Page />
      </div>
    );
  }
}

export default Wiki;
