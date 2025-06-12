import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  return (
    <>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;