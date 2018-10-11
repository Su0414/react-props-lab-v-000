// Code The Spaceship Component Here
import React from 'react';
<<<<<<< HEAD
=======
import ReactDOM from 'react-dom';
>>>>>>> 439a2675456aeb6d172d0fc6521a3da9774b0a97

export default class Spaceship extends React.Component {
  render() {
      return (
        <div className="Spaceship">
          <h1>Hello, {this.props.name}</h1>
          <h2>{this.props.speed}</h2>
          <h2>{this.props.hasRockets}</h2>
          <small>Colors: {this.props.colors.join(', ')}</small>
        </div>
      );
    }
  }

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets : false,
  colors : ['black', 'red']
};
