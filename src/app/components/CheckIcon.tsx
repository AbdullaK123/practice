import React from 'react';

const CheckIcon = ({ size = 50, color = "#4CAF50", strokeColor = "white", strokeWidth = 3, ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      className="hover:scale-120 transition-all duration-150 active:scale-95 active:bg-white"
      {...props}
    >
      <circle cx="50" cy="50" r="45" fill={color} />
      <path 
        d="M30,48 L43,75 L75,30" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default CheckIcon;