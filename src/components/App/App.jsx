import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'

import css from './App.module.css'

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Contacts</h1>
      <SearchBox />
      <ContactForm />
      <ContactList/>
    </div>
  )
}