import PropTypes from 'prop-types';
import s from 'Components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.filter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
