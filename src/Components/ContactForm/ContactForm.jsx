import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from 'Components/ContactForm/ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit} autoComplete="off">
        <h3>Did you already find a new friend?^^</h3>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
