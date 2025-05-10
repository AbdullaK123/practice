'use client'
import React from 'react';

const CrossIcon = ({ size = 50, color = "red", strokeColor = "white", strokeWidth = 5, ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      className="hover:scale-110 transition-all duration-150 active:scale-95 cursor-pointer"
      aria-label="Remove from favorites"
      role="button"
      tabIndex={0}
      {...props}
    >
      <circle cx="50" cy="50" r="45" fill={color} />
      <path 
        d="M30,30 L70,70 M30,70 L70,30" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth + 2} // Increased stroke width for better visibility
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default CrossIcon;