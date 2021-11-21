import PropTypes from 'prop-types';
import err from './err.jpg';

export default function RejectedView({ message }) {
  return (
    <div>
      <img src={err} alt="error" />
      <p>{message}</p>
    </div>
  );
}

RejectedView.defaultProps = {
  message: '',
};

RejectedView.propTypes = {
  message: PropTypes.string.isRequired,
};
