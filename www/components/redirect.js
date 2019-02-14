import React from 'react';
import Router from 'next/router';

export default class extends React.PureComponent {
  componentDidMount() {
    Router.replace(this.props.to);
  }

  render() {
    return null;
  }
}
