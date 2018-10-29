import React, { Component } from 'react';
import Lorem from 'react-lorem-component';

class MyLorem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hiya, Twitch</h1>
        <Lorem />
      </div>
    );
  }
}

export default MyLorem