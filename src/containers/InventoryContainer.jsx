import React, { useState } from "react";
import { InventoryItem } from "../components/InventoryItem";
import torch from "../assets/items/torch.png"
import eyes from "../assets/items/eyes.png"
import multitool from "../assets/items/multitool.png"
import laptop from "../assets/items/laptop.png"
import keycard from "../assets/items/keycard.png"
import tracker from "../assets/items/tracker.png"
import {useItem} from "../Api";

export const InventoryContainer = ({playerItems, setPlayerItems, itemName}) => {



  const items= [
    {
      id: 1,
      title: "Torch",
      image: torch
    },
    {
      id: 2,
      title: "Multitool",
      image: multitool
    },
    {
      id: 3,
      title: "Keycard",
      image: keycard
    },
    {
      id: 4,
      title: "Laptop",
      image: laptop
    },
    {
      id: 5,
      title: "Eyes",
      image: eyes
    },
    {
      id: 6,
      title: "Tracker",
      image: tracker
    }
  ];


  const itemsToDisplay = Object.keys(items).map((item,i) => {
    <li key={i}>
      {
        playerItems.map((gameItem, index) => )
      }
    </li>

  for (let x = 0; x < playerItems.length; x++){
    if(playerItems[x] === )
  }
  
  items.filter((item) => 
    item.title.toLowerCase().includes(playerItems)
    ).map((item,i)=> 
      <li><InventoryItem 
        item={`${items[item].title}`} 
        key={i} itemIcon={`${items[item].image}`} 
        text={`${items[item].title}`} 
      /></li>);
  
  
  
  // const hiddenItemList = Object.keys(items).map((item,i) => {
  //   return (
  //     <li><InventoryItem 
  //       item={`${items[item].title}`} 
  //       key={i} itemIcon={`${items[item].image}`} 
  //       text={`${items[item].title}`} 
        
  //     /></li>
  //   );
  // })

  

  return (
    <div className="bg-green-600 w-1/2">
      <ul>
        {itemsToDisplay}
      </ul>
    </div>
  );
};
