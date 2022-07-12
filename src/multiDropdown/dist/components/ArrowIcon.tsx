import React from 'react';

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13'
      height='8'
      viewBox='0 0 13 8'
      fill={'none'}
      className={className}
    >
      <path
        d='M1.06348 1.04015L6.98625 5.95435L12.3167 1.04015'
        stroke='#616166'
        strokeWidth='2'
      />
    </svg>
  );
};

export default ArrowIcon;
