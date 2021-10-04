import { useState, useEffect } from 'react';
// import { Component } from 'react';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const shortid = require('shortid');

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filterV, setFilterV] = useState('');

  useEffect(() => {
    return window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ([name, number]) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    const contactFind = contacts.find(contact => contact.name === name);
    if (contactFind !== undefined) {
      return alert(`${name} is already in contacts.`);
    }
    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilterV(e.target.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filterV.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filterV);
  return (
    <div>
      <h2 className="phonebook-title">Phonebook</h2>
      <ContactForm onSubmit={addContact} />

      <h3 className="phonebook-title">Contacts</h3>
      <Filter value={filterV} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
