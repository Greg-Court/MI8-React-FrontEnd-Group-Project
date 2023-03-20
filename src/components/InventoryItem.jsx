import React from "react";

export const InventoryItem = ({item, itemIcon}) => {
  return (
  <div className='flex items-center'>
    <div className="p-3 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-2 justify-start">
      <div className="shrink-0">
        <img
          src={itemIcon}
          alt="ChitChat Logo"
          className="h-12 w-12"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{item}</div>
      </div>
    </div>
  </div>
  );
  
};
