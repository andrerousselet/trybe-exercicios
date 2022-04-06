import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image } } = this.props;
    return (
      <div className='pokemon'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Peso médio: ${value} ${measurementUnit}`}</p>
        <img src={image} alt={name} />
      </div>
    )
  }
}

export default Pokemon;
