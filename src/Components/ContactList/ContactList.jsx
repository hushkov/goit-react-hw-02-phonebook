import PropTypes from 'prop-types';
import ContactListItem from 'Components/ContactList/ContactListItem/ContactListItem';
import s from 'Components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          name={name}
          number={number}
          id={id}
          onDelete={onDelete}
          key={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
