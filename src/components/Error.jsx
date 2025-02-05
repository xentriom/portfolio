import { TriangleAlert } from 'lucide-react';
import PropTypes from 'prop-types';

// Error component for displaying error messages
const Error = ({ message }) => {
  return (
    <div className="flex bg-red-50 border border-red-200 rounded-lg p-4">
      <TriangleAlert size={24} className="text-red-500 mr-2" />
      <p className="text-red-700">{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
