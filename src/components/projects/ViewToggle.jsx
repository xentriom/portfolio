import { memo } from 'react';
import { List, LayoutGrid } from 'lucide-react';
import MemoizedIcon from '../MemoizedIcon';
import PropTypes from 'prop-types';

const ViewToggle = memo(function ViewToggle({ view, setView }) {
  return (
    <div className="flex gap-2">
      <button
        className={`p-2 rounded-lg cursor-pointer ${view === 'list' ? 'bg-indigo-400/75 backdrop-blur-lg rounded-lg shadow-xl text-gray-200' : ''}`}
        aria-label="List View"
        onClick={() => setView('list')}
      >
        <MemoizedIcon Icon={List} />
      </button>
      <button
        className={`p-2 rounded-lg cursor-pointer ${view === 'grid' ? 'bg-indigo-400/75 backdrop-blur-lg rounded-lg shadow-xl text-gray-200' : ''}`}
        aria-label="Grid View"
        onClick={() => setView('grid')}
      >
        <MemoizedIcon Icon={LayoutGrid} />
      </button>
    </div>
  );
});

ViewToggle.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default ViewToggle;
