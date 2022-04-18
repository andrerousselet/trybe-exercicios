import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {
  render() {
    const { type, value, name, handleChange } = this.props;
    return (
      <label>
        {name}
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {!value.length ? ' -campo inválido- ' : ' -ok- '}
      </label>
    )
  }
}

Label.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Label;
