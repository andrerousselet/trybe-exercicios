import React from 'react';

class TextLable extends React.Component {
  render() {
    const { type, name, value, maxLength, onChange } = this.props;
    return (
      <label className="form-labels">
        {`${name.charAt(0).toUpperCase() + name.slice(1)}:`}
        <input
          type={type}
          name={name}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default TextLable;
