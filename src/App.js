import { useEffect, useState } from "react";
import { ChatContainer } from "./containers/ChatContainer";
import { ImageContainer } from "./containers/ImageContainer";
import { InventoryContainer } from "./containers/InventoryContainer";
import { initialiseApp } from "./AppInitialiser";
import Sidebar from "./containers/Sidebar";
import { deleteGame, deletePlayer, getGameById } from "./Api";
import Confetti from "./Confetti";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  // For each state variable, checks if there is any data in the sessionStorage for the corresponding key.
  // If the data is found, it's parsed from a JSON string back into its original data structure (array) and used as the initial state.
  // If no data is found, an empty array is used as the initial state.
  const [messages, setMessages] = useState([]);
  const [playerItems, setPlayerItems] = useState([]);
  const [roomsYouCanEnter, setRoomsYouCanEnter] = useState([]);
  const [playerId, setPlayerId] = useState(null);
  const [gameId, setGameId] = useState(null);
  const [currentRoom, setCurrentRoom] = useState("plaza");
  // const [startConfetti, setStartConfetti] = useState(false)
  const [uiProps, setUiProps] = useState({
    showConfetti: false
  });


  

  useEffect( () => {
    const checkIfPopup = async () => {
      const gameStatus = await getGameById(playerId);
      console.log(gameStatus);
      (gameStatus.playerHasWon === true) && setUiProps({
        showConfetti: true
      })
    }
    checkIfPopup();
  }, [currentRoom])

  // useEffect(() => {
  //   const gameStatus = getGameById(playerId);
  //   console.log(gameStatus.playerHasWon)
  // }, [currentRoom])

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
      setGameId,
      setCurrentRoom
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
      setMessages([]);
      setPlayerItems([]);
      setRoomsYouCanEnter([]);
      initialiseApp(
        "James Bondage",
        setMessages,
        setPlayerItems,
        setRoomsYouCanEnter,
        setPlayerId,
        setGameId,
        setCurrentRoom
      );
    } catch (error) {
      console.log(error);
    }
  };

  const startNewGame = async () => {
    try {setMessages([]);
      setPlayerItems([]);
      setRoomsYouCanEnter([]);
      initialiseApp(
        "James Bondage",
        setMessages,
        setPlayerItems,
        setRoomsYouCanEnter,
        setPlayerId,
        setGameId,
        setCurrentRoom
      );
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {uiProps.showConfetti && <Confetti />}
      <div className="h-screen">
        <ImageContainer
          roomsYouCanEnter={roomsYouCanEnter}
          setRoomsYouCanEnter={setRoomsYouCanEnter}
          setMessages={setMessages}
          messages={messages}
          setPlayerItems={setPlayerItems}
          gameId={gameId}
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
         <AudioPlayer />
        <div className="flex h-1/2">
          <Sidebar resetGame={resetGame} startNewGame={startNewGame} />
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
    </>
  );
}

export default App;
