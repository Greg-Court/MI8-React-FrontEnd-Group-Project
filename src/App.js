import { ChatContainer } from "./containers/ChatContainer";
import { ImageContainer } from "./containers/ImageContainer";
import { InventoryContainer } from "./containers/InventoryContainer";

function App() {
  return (
    <div className="app h-screen">
      <ImageContainer/>
      <div className="flex h-1/2">
        <InventoryContainer/>
        <ChatContainer/>
      </div>
    </div>
  );
}

export default App;
