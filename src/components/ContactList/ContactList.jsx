import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import PlaceHolder from "../PlaceHolder/PlaceHolder";

const getVisibleContacts = (filter, contacts) => {
  if (filter.trim() === "") {
    return contacts;
  } else {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(filter, contacts);
  return (
    <div className={css.contactsContainer}>
      {visibleContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <li className={css.contactItem} key={id}>
                <Contact name={name} number={number} id={id} />
              </li>
            );
          })}
        </ul>
      ) : (
        <PlaceHolder
          hasContacts={contacts.length > 0}
          hasVisibleContacts={visibleContacts.length > 0}
        />
      )}
    </div>
  );
};

export default ContactList;