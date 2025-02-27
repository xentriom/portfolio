import { memo, useState } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowUpDown } from 'lucide-react';
import MemoizedIcon from '../MemoizedIcon';
import PropTypes from 'prop-types';

const SearchBar = memo(function SearchInput({ value, onChange, sortValue, onSortChange }) {
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { label: 'ID (Low to High)', value: 'id-asc' },
    { label: 'ID (High to Low)', value: 'id-desc' },
    { label: 'Name (A-Z)', value: 'name-asc' },
    { label: 'Name (Z-A)', value: 'name-desc' },
  ];

  const handleSortSelect = (value) => {
    onSortChange(value);
    setIsSortOpen(false);
  };

  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  return (
    <div className="relative w-full">
      <MemoizedIcon Icon={Search} className="absolute left-3 top-3 text-gray-200" />
      <input
        type="text"
        name="search"
        placeholder="Search projects..."
        value={value}
        onChange={onChange}
        className="pl-10 pr-10 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
      />
      <div className="absolute right-3 top-3">
        <MemoizedIcon
          Icon={ArrowUpDown}
          className="text-gray-200 cursor-pointer hover:text-indigo-700 transition-colors duration-150"
          onClick={() => setIsSortOpen(!isSortOpen)}
        />
        {isSortOpen && (
          <motion.div
            className="absolute right-0 top-10 w-60 glassmorph-700 z-20 p-2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ul className="space-y-2">
              {sortOptions.map((option) => (
                <li key={option.value}>
                  <label className="flex items-center w-full px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 has-checked:bg-indigo-400/50 hover:bg-indigo-700/50">
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={sortValue === option.value}
                      onChange={() => handleSortSelect(option.value)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-200">{option.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
});

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sortValue: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default SearchBar;
