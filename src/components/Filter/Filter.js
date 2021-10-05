import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import phoneActions from '../../redux/phonebook/phone-actions';

function Filter({ value, onChange }) {
  return (
    <label className="filter-label">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="filter-input"
      />
    </label>
  );
}
const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phoneActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
