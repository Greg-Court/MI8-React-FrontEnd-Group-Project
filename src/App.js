import { useEffect, useState } from "react";
import { ChatContainer } from "./containers/ChatContainer";
import { ImageContainer } from "./containers/ImageContainer";
import { InventoryContainer } from "./containers/InventoryContainer";
import { initialiseApp } from "./AppInitialiser";

function App() {
  // For each state variable, checks if there is any data in the sessionStorage for the corresponding key.
  // If the data is found, it's parsed from a JSON string back into its original data structure (array) and used as the initial state.
  // If no data is found, an empty array is used as the initial state.
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem("messages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });
  const [playerItems, setPlayerItems] = useState(() => {
    const storedPlayerItems = localStorage.getItem("playerItems");
    return storedPlayerItems ? JSON.parse(storedPlayerItems) : [];
  });
  const [roomsYouCanEnter, setRoomsYouCanEnter] = useState(() => {
    const storedRooms = localStorage.getItem("roomsYouCanEnter");
    return storedRooms ? JSON.parse(storedRooms) : [];
  });

  // checks if all state variables are empty arrays (i.e., no data is found in sessionStorage), and if so,
  // it calls the initialiseApp function to fetch data from the backend and set the initial state.
  useEffect(() => {
    if (
      messages.length === 0 &&
      playerItems.length === 0 &&
      roomsYouCanEnter.length === 0
    ) {
      initialiseApp(
        "player1",
        "1",
        setMessages,
        setPlayerItems,
        setRoomsYouCanEnter
      );
    }
  }, []);

  // UseEffect hooks listen for changes in their respective state variables (messages, playerItems, and roomsYouCanEnter).
  // When the state changes, the hook updates the sessionStorage with the latest state data.
  // The data is converted to a JSON string using JSON.stringify before being saved to the sessionStorage.
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("playerItems", JSON.stringify(playerItems));
  }, [playerItems]);

  useEffect(() => {
    localStorage.setItem("roomsYouCanEnter", JSON.stringify(roomsYouCanEnter));
  }, [roomsYouCanEnter]);

  const resetGame = () => {
    sessionStorage.clear();
    setMessages([]);
    setPlayerItems([]);
    setRoomsYouCanEnter([]);
    initialiseApp('player1', '1', setMessages, setPlayerItems, setRoomsYouCanEnter);
  }

  return (
    <div className="h-screen">
      <ImageContainer roomsYouCanEnter={roomsYouCanEnter} />
      <div className="flex h-1/2">
        <InventoryContainer playerItems={playerItems} />
        <ChatContainer messages={messages} />
      </div>
    </div>
  );
}

export default App;
