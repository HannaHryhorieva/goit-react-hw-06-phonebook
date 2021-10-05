import { createAction } from '@reduxjs/toolkit';

const shortid = require('shortid');

const addContact = createAction('phonebook/add', ([name, number]) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

export default { addContact, deleteContact, changeFilter };
