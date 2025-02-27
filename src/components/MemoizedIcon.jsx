import { memo } from 'react';
import PropTypes from 'prop-types';

// MemoizedIcon component for memoizing icons (Lucide)
const MemoizedIcon = memo(function MemoizedIcon({ Icon, size = 20, className = '', ...rest }) {
  return <Icon size={size} className={className} {...rest} />;
});

MemoizedIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default MemoizedIcon;
