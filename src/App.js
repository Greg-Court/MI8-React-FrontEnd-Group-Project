import { useEffect, useState } from "react";
import { ChatContainer } from "./containers/ChatContainer";
import { ImageContainer } from "./containers/ImageContainer";
import { InventoryContainer } from "./containers/InventoryContainer";
import { initialiseApp } from "./AppInitialiser";
import Sidebar from "./containers/Sidebar";
import { deleteGame, deletePlayer } from "./Api";

function App() {
  // For each state variable, checks if there is any data in the sessionStorage for the corresponding key.
  // If the data is found, it's parsed from a JSON string back into its original data structure (array) and used as the initial state.
  // If no data is found, an empty array is used as the initial state.
  const [messages, setMessages] = useState(() => {
    const storedMessages = sessionStorage.getItem("messages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });
  const [playerItems, setPlayerItems] = useState(() => {
    const storedPlayerItems = sessionStorage.getItem("playerItems");
    return storedPlayerItems ? JSON.parse(storedPlayerItems) : [];
  });
  const [roomsYouCanEnter, setRoomsYouCanEnter] = useState(() => {
    const storedRooms = sessionStorage.getItem("roomsYouCanEnter");
    return storedRooms ? JSON.parse(storedRooms) : [];
  });
  const [playerId, setPlayerId] = useState(null);
  const [gameId, setGameId] = useState(null);

  // const [isAppInitialised, setIsAppInitialised] = useState(false);

  // checks if all state variables are empty arrays (i.e., no data is found in sessionStorage), and if so,
  // it calls the initialiseApp function to fetch data from the backend and set the initial state.
  useEffect(() => {
    initialiseApp(
      "James Bondage",
      setMessages,
      setPlayerItems,
      setRoomsYouCanEnter,
      setPlayerId,
      setGameId
    );
  }, []);

  // UseEffect hooks listen for changes in their respective state variables (messages, playerItems, and roomsYouCanEnter).
  // When the state changes, the hook updates the sessionStorage with the latest state data.
  // The data is converted to a JSON string using JSON.stringify before being saved to the sessionStorage.
  useEffect(() => {
    sessionStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    sessionStorage.setItem("playerItems", JSON.stringify(playerItems));
  }, [playerItems]);

  useEffect(() => {
    sessionStorage.setItem(
      "roomsYouCanEnter",
      JSON.stringify(roomsYouCanEnter)
    );
  }, [roomsYouCanEnter]);

  const resetGame = async () => {
    try {
      if (playerId !== null && gameId !== null) {
        await deleteGame(gameId);
        await deletePlayer(playerId);
      }
      sessionStorage.clear();
      setMessages([]);
      setPlayerItems([]);
      setRoomsYouCanEnter([]);
      initialiseApp(
        "James Bondage",
        setMessages,
        setPlayerItems,
        setRoomsYouCanEnter,
        setPlayerId,
        setGameId
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen">
      <ImageContainer
        roomsYouCanEnter={roomsYouCanEnter}
        setMessages={setMessages}
        messages={messages}
        setPlayerItems={setPlayerItems}
      />
      <div className="flex h-1/2">
        <Sidebar resetGame={resetGame} />
        <div className="flex flex-1">
          <InventoryContainer
            setMessages={setMessages}
            setPlayerItems={setPlayerItems}
            setRoomsYouCanEnter={setRoomsYouCanEnter}
            playerItems={playerItems}
            messages={messages}
            playerId={playerId}
          />
          <ChatContainer messages={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
