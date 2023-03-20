import { ChatContainer } from "./containers/ChatContainer";
import { ImageContainer } from "./containers/ImageContainer";
import { InventoryContainer } from "./containers/InventoryContainer";

function App() {
  return (
    <div className="app">
      <p className="bg-red-500">Hello WOrld</p>
      <ImageContainer/>
      <div className="flex">
        <InventoryContainer/>
        <ChatContainer/>
      </div>
    </div>
  );
}

export default App;
