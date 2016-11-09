import React, { PropTypes } from 'react';

function BasicField(props) {
  return (
    <div>
      <p>{props.name}:</p>
      <input
        onChange={e => props.update(props.name, e.target.value)}
      />
    </div>
  );
}

BasicField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BasicField;
