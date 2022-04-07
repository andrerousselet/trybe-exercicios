import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numberOfClicks: 0
    }
  }

  handleClick() {
    this.setState((prevState, _props) => ({
      numberOfClicks: prevState.numberOfClicks + 1
    }))
  }

  render() {
    return (
      <span>
        <button type="button" onClick={this.handleClick}>{this.state.numberOfClicks}</button>
      </span>
    );
  }
}

export default Button;
