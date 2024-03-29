import React from 'react'

const DealItems = ({ text }) => {
    return (
      <div className="flex flex-row gap-2 items-center justify-center bg-[#FFF7E8] rounded-xl h-[50px] p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M13 10.6116H7M10 7.61163V13.6116M10 1.61163C17.2 1.61163 19 3.41163 19 10.6116C19 17.8116 17.2 19.6116 10 19.6116C2.8 19.6116 1 17.8116 1 10.6116C1 3.41163 2.8 1.61163 10 1.61163Z"
            stroke="#FFA500"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-[#734A00] text-xs">{text}</p>
      </div>
    );
  };
  
 
export default DealItems