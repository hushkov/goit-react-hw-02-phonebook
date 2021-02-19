import PropTypes from 'prop-types';
import s from 'Components/ContactList/ContactListItem/ContactListItem.module.css';

const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.contactItem}>
      {name}: {number}
      <button className={s.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
