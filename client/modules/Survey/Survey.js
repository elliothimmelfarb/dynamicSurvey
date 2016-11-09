import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateField } from './SurveyActions';

import BasicField from './components/BasicField/BasicField';
import RoomArea from './components/RoomArea/RoomArea';

// Import Style
// import styles from './Survey.css';

class Survey extends Component {
  render() {
    let { fields, update } = this.props;
    fields = fields.map((field, index) => {
      if (field.type === 'BasicField') {
        return (
          <BasicField
            key={index}
            name={field.name}
            update={update}
          />
        );
      }
    });
    return (
      <div>
        <h1>Survey</h1>
        {fields}
        <RoomArea />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fields: state.survey.fields,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (name, val) => dispatch(updateField(name, val)),
  };
};

Survey.propTypes = {
  fields: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);
