import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return (
    <div className="w-full max-w-2xl mt-4 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center">
        <svg
          className="w-5 h-5 text-red-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-red-700">{message}</p>
      </div>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
