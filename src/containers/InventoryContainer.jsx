import React, { useState } from "react";
import { InventoryItem } from "../components/InventoryItem";
import torch from "../assets/items/torch.png"

export const InventoryContainer = () => {
  const [items, setItems] = useState(["Torch", "Eyes", "Multitool", "Laptop", "Keycard", "Tracker"]);

  const itemList = items.map((item) => <li><InventoryItem item={item} itemIcon={torch} /></li>);
  return (
    <div className="bg-green-600 w-1/2">
      <ul>
        {itemList}
      </ul>
    </div>
  );
};
