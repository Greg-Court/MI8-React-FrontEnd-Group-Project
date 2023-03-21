import React from "react";
import {playerUseItem} from "../Api";



export const InventoryItem = ({item, itemIcon, text, messages,
  setMessages,
  setPlayerItems,
  setRoomsYouCanEnter}) => {
  
  const handleUseItem = async () => {
    try{
      const nextMoveResponse = await playerUseItem(1, item.toLowerCase());
      setMessages([...messages,
        { type: 'send', text: `I just used ${item}` },
        { type: 'receive', text: nextMoveResponse.reply }
      ]);
      setPlayerItems(nextMoveResponse.inventory);
      setRoomsYouCanEnter(nextMoveResponse.roomsYouCanEnter);
      console.log(nextMoveResponse)
    } catch (error) {
      console.log(error);
    } 
  };


  return (
  <div className='flex items-center'>
    <button onClick={handleUseItem} className="p-3 min-w-[200px] bg-white hover:bg-gold-600 active:translate-y-0.5 font-bold py-2 px-4 border-b-4 border-gold-300 rounded-full shadow-lg flex items-center space-x-4 mt-2 justify-center transition-transform duration-75 ease-in-out">
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
