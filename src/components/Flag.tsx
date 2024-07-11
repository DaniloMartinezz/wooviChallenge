import React from 'react';

interface FlagProps {
  text: string;
}

const Flag: React.FC<FlagProps> = ({ text }) => {
  return (
    <div className="relative bg-flagblue text-white px-4 py-2 rounded-l-md text-xs flex items-center">
      <span role="img" aria-label="money">💸</span>
      <span className="ml-1">{text}</span>
      <div className="absolute inset-y-0 right-0 flex items-center overflow-hidden">
        <div className="w-4 h-4 bg-flagblue transform rotate-45 origin-bottom-left"></div>
      </div>
    </div>
  );
};

export default Flag;
