import { InventoryItem } from "../components/InventoryItem";
import torch from "../assets/items/torch.png";
import eyes from "../assets/items/eyes.png";
import multitool from "../assets/items/multitool.png";
import laptop from "../assets/items/laptop.png";
import keycard from "../assets/items/keycard.png";
import tracker from "../assets/items/tracker.png";

export const items = [
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

export const itemsToDisplay = (
  playerItems,
  setPlayerItems,
  playerId,
  setMessages,
  setRoomsYouCanEnter,
  messages,
  items
) =>
  items
    .filter(
      (item) => playerItems && playerItems.includes(item.title.toLowerCase())
    )
    .map((item) => (
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
