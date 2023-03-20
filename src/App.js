import { useEffect, useState } from "react";
import { ChatContainer } from "./containers/ChatContainer";
import { ImageContainer } from "./containers/ImageContainer";
import { InventoryContainer } from "./containers/InventoryContainer";
import { initialiseApp } from "./AppInitialiser";

function App() {

  useEffect(() => {
    initialiseApp('player1', '1');
  }, []);

  return (
    <div className="h-screen">
      <ImageContainer/>
      <div className="flex h-1/2">
        <InventoryContainer/>
        <ChatContainer/>
      </div>
    </div>
  );
}

export default App;
