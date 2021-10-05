import types from './phone-types';

const shortid = require('shortid');

const addContact = ([name, number]) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
