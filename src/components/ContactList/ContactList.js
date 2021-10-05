import React from 'react';
import { connect } from 'react-redux';
import phoneActions from '../../redux/phonebook/phone-actions';

import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contacts-item">
          <span className="contacts-item-name">{name}:</span>
          <span className="contacts-item-name">{number}</span>
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (contacts, filterV) => {
  const normalizedFilter = filterV.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phoneActions.deleteContact(id)),
});
Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
