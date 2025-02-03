import { Search } from 'lucide-react';
import MemoizedIcon from './MemoizedIcon';
import PropTypes from 'prop-types';

const SearchInput = ({ value, onChange }) => (
  <div className="relative w-full max-w-lg">
    <MemoizedIcon Icon={Search} className="absolute left-3 top-3 text-gray-400" />
    <input
      type="text"
      placeholder="Search projects..."
      value={value}
      onChange={onChange}
      className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
