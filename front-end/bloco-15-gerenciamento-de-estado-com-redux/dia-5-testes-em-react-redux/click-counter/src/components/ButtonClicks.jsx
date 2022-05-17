import React from 'react';
import { connect } from 'react-redux';
import addClick from '../redux/actions';

function ButtonClicks(props) {
  const { add } = props;
  return (
    <div>
      <button onClick={ add }>Clique aqui</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick()),
})

export default connect(null, mapDispatchToProps)(ButtonClicks);
