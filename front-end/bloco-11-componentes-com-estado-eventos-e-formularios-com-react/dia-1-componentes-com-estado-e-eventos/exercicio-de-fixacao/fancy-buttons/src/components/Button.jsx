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

  handleClick(e) {
    this.setState((prevState, _props) => ({
      numberOfClicks: prevState.numberOfClicks + 1
    }))
    if ((this.state.numberOfClicks + 1) % 2 === 0) {
      e.target.style.backgroundColor = 'lightseagreen';
    } else {
      e.target.style.backgroundColor = '';
    }
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
