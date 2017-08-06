// @flow
import React from 'react';

export default class Title extends React.Component {
  props: {
    title: string
  }

  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}
