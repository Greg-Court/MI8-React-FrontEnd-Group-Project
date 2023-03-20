import React, { useState } from "react";
import { InventoryItem } from "../components/InventoryItem";
import torch from "../assets/items/torch.png"
import eyes from "../assets/items/eyes.png"
import multitool from "../assets/items/multitool.png"
import laptop from "../assets/items/laptop.png"
import keycard from "../assets/items/keycard.png"
import tracker from "../assets/items/tracker.png"

export const InventoryContainer = () => {
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

  const itemList = Object.keys(items).map((item,i) => {
    return (
      <li><InventoryItem item={`${items[item].title}`} key={i} itemIcon={`${items[item].image}`} text={`${items[item].title}`} /></li>
    );
  })

  const useItem = async (itemName) => {
    try {
      const response = await fetch(`http://localhost:8080/player/1/${itemName}`, {
        method: "PATCH",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
   


  return (
    <div className="bg-green-600 w-1/2">
      <ul>
        {itemList}
      </ul>
    </div>
  );
};
