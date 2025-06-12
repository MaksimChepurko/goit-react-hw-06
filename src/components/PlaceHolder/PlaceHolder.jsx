import css from "./PlaceHolder.module.css";

const PlaceHolder = ({ hasContacts, hasVisibleContacts }) => {
  return (
    <div className={css.placeHolderContainer}>
      <h2 className={css.placeHolderText}>
        {(hasContacts && !hasVisibleContacts && "No match") ||
          (!hasContacts && "No contacts. Please add!")}
      </h2>
    </div>
  );
};

export default PlaceHolder;