import React, { useState } from "react";
import { InventoryItem } from "../components/InventoryItem";
import torch from "../assets/items/torch.png"
import eyes from "../assets/items/eyes.png"
import multitool from "../assets/items/multitool.png"
import laptop from "../assets/items/laptop.png"
import keycard from "../assets/items/keycard.png"
import tracker from "../assets/items/tracker.png"

export const InventoryContainer = () => {
  const [items, setItems] = useState([
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
  ]);

  const itemList = Object.keys(items).map((item,i) => {
    return (
      <li><InventoryItem item={`${items[item].title}`} key={i} itemIcon={`${items[item].image}`} /></li>
    );
  })   

  return (
    <div className="bg-green-600 w-1/2">
      <ul>
        {itemList}
      </ul>
    </div>
  );
};
