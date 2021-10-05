import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <div>
      <h2 className="phonebook-title">Phonebook</h2>
      <ContactForm />

      <h3 className="phonebook-title">Contacts</h3>
      <Filter />
      <ContactList />
    </div>
  );
}
