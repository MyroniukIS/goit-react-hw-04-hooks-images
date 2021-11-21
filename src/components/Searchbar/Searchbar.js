import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputValue = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      toast.error('Enter correct value!');
      this.setState({ inputValue: '' });
      return;
    }

    this.props.forSubmit(this.state.inputValue.trim());
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputValue}
          />
        </form>
      </header>
    );
  }
}

Searchbar.defaultProps = {
  forSubmit: () => null,
};

Searchbar.propTypes = {
  forSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
