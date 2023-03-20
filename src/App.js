import { useEffect, useState } from "react";
import { ChatContainer } from "./containers/ChatContainer";
import { ImageContainer } from "./containers/ImageContainer";
import { InventoryContainer } from "./containers/InventoryContainer";
import { initialiseApp } from "./AppInitialiser";

function App() {
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]);
  const [roomsYouCanEnter, setRoomsYouCanEnter] = useState([]);
  
  useEffect(() => {
    initialiseApp('player1', '1', setMessage);
  }, []);

  return (
    <div className="h-screen">
      <ImageContainer roomsYouCanEnter={roomsYouCanEnter}/>
      <div className="flex h-1/2">
        <InventoryContainer items={items}/>
        <ChatContainer message={message}/>
      </div>
    </div>
  );
}

export default App;
