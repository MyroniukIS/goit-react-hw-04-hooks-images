import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ type, onClick, children }) {
  return (
    <div className={styles.ButtonBox}>
      <button type={type} className={styles.Button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
