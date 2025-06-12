import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const ContactValid = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short")
    .matches(/^\+?[0-9\s-]{1,}$/, "Type Correct Phone!")
    .max(50, "Too Long")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };
  const nameFieldId = `name${useId()}`;
  const telFieldId = `tel${useId()}`;
  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={ContactValid}
      >
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={css.message}
              name="name"
              component="span"
            />
          </div>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={telFieldId}>
              Number
            </label>
            <Field
              className={css.input}
              type="tel"
              name="number"
              id={telFieldId}
            />
            <ErrorMessage
              className={css.message}
              name="number"
              component="span"
            />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;