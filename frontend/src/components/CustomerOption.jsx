import React from 'react';
import Icon from './Icon';

const CustomerOption = ({ name, place, url, selected, onSelect }) => {
  const containerClassName = `flex flex-row gap-2 items-center py-3 cursor-pointer ${
    selected ? 'bg-[#fff7e8] rounded-xl w-full' : ''
  }`;

  return (
    <div className={containerClassName} onClick={onSelect}>
      <img className="w-8 h-8 rounded-full ml-2" src={url} alt="user" />
      <div className="flex flex-col">
        <p className="text-sm font-medium">{name}</p>
        <span className="whitespace-nowrap text-black rounded-full text-xs w-fit">
          {place}
        </span>
      </div>
      {selected && (
        <div className="ml-auto flex items-center">
          <Icon/>
        </div>
      )}
    </div>
  );
};

export default CustomerOption;
