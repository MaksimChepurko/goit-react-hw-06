import css from "./Contact.module.css";
import { LuContactRound } from "react-icons/lu";
import { FaSquarePhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contactInfo}>
        <div className={css.contactContainer}>
          <LuContactRound className={`${css.contactIcon} ${css.name}`} />
          <h3 className={css.contactName}>{name}</h3>
        </div>
        <div className={css.contactContainer}>
          <FaSquarePhone className={`${css.contactIcon} ${css.phone}`} />
          <a className={css.contactPhone} href={`tel:${number}`}>
            {number}
          </a>
        </div>
      </div>
      <button
        className={css.contactDelete}
        type="button"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;