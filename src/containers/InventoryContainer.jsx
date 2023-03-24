import React, { useEffect, useState } from "react";
import { InventoryItem } from "../components/InventoryItem";
import torch from "../assets/items/torch.png";
import eyes from "../assets/items/eyes.png";
import multitool from "../assets/items/multitool.png";
import laptop from "../assets/items/laptop.png";
import keycard from "../assets/items/keycard.png";
import tracker from "../assets/items/tracker.png";
import weaponsbg from "../assets/other/weaponsbg.jpeg";

export const InventoryContainer = ({
  playerItems,
  setPlayerItems,
  playerId,
  setMessages,
  setRoomsYouCanEnter,
  messages
}) => {
  const items = [
    {
      id: 1,
      title: "Torch",
      image: torch,
    },
    {
      id: 2,
      title: "Multitool",
      image: multitool,
    },
    {
      id: 3,
      title: "Keycard",
      image: keycard,
    },
    {
      id: 4,
      title: "Laptop",
      image: laptop,
    },
    {
      id: 5,
      title: "Eyes",
      image: eyes,
    },
    {
      id: 6,
      title: "Tracker",
      image: tracker,
    },
  ];

  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    const filteredItems = items.filter(
      (item) => playerItems && playerItems.includes(item.title.toLowerCase())
    );
    const itemsToDisplay = filteredItems.map((item) => (
      <li key={item.id}>
        <InventoryItem
          item={item.title}
          itemIcon={item.image}
          text={item.title}
          setMessages={setMessages}
          setPlayerItems={setPlayerItems}
          setRoomsYouCanEnter={setRoomsYouCanEnter}
          messages={messages}
          playerId={playerId}
        />
      </li>
    ));
    setItemsToDisplay(itemsToDisplay);
  }, [playerItems, playerId, messages]);

  return (
    <div
      style={{ backgroundImage: `url(${weaponsbg})`, backgroundSize: "cover" }}
      className="w-1/2 shadow-2xl flex justify-center bg-center"
    >
      <ul className="flex flex-col justify-center">{itemsToDisplay}</ul>
    </div>
  );
};
