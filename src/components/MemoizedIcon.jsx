import { memo } from 'react';
import PropTypes from 'prop-types';

const MemoizedIcon = memo(function MemoizedIcon({ Icon, size = 20, className = '' }) {
  return <Icon size={size} className={className} />;
});

MemoizedIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default MemoizedIcon;
