import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';


export default function ContactList() {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
        <ul className={css.list}>
            {filterContacts.map(contact => (
                <li key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
    );
}