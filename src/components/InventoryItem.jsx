import React from "react";


export const InventoryItem = ({item, itemIcon, text, }) => {
  
  // const handleButtonClick = () => {
    
  // }


  return (
  <div className='flex items-center'>
    <button className="p-3 max-w-xl mx-auto bg-white hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-xl shadow-lg flex items-center space-x-4 mt-2 justify-start">
      <div className="shrink-0">
        <img
          src={itemIcon}
          alt= {`icon of ${text}`}
          className="h-12 w-12"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{item}</div>
      </div>
    </button>
  </div>
  );
  
};
