import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Searchbar.module.css';

export default function Searchbar({ forSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return toast('Enter correct value!');
    }

    forSubmit(inputValue.trim());
    setInputValue('');
  };

  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInputValue}
        />
      </form>
    </header>
  );
}

Searchbar.defaultProps = {
  forSubmit: () => null,
};

Searchbar.propTypes = {
  forSubmit: PropTypes.func.isRequired,
};
