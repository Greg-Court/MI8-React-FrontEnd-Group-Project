import { useEffect, useState } from "react";
import { ChatContainer } from "./containers/ChatContainer";
import { ImageContainer } from "./containers/ImageContainer";
import { InventoryContainer } from "./containers/InventoryContainer";
import { initialiseApp } from "./AppInitialiser";

function App() {
  const [messages, setMessages] = useState([]);
  const [playerItems, setPlayerItems] = useState([]);
  const [roomsYouCanEnter, setRoomsYouCanEnter] = useState([]);
  
  useEffect(() => {
    initialiseApp('player1', '1', setMessages, setPlayerItems, setRoomsYouCanEnter);
  }, []);

  return (
    <div className="h-screen">
      <ImageContainer roomsYouCanEnter={roomsYouCanEnter}/>
      <div className="flex h-1/2">
        <InventoryContainer playerItems={playerItems}/>
        <ChatContainer messages={messages}/>
      </div>
    </div>
  );
}

export default App;
