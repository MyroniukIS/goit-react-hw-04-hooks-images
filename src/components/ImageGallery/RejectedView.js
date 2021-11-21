import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RejectedView({ message }) {
  return toast.warn(message);
}

RejectedView.defaultProps = {
  message: '',
};

RejectedView.propTypes = {
  message: PropTypes.string.isRequired,
};
