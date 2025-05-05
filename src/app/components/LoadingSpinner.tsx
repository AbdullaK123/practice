// components/LoadingSpinner.jsx
export default function LoadingSpinner({ size = 40, color = "#3B82F6" }) {
    return (
      <div className="flex justify-center items-center m-4">
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
        >
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke={color} 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="30 50" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    );
  }