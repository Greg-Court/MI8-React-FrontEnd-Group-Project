export const initialiseApp = async (
  playerName,
  gameId,
  setMessages,
  setPlayerItems,
  setRoomsYouCanEnter
) => {
  try {
    const newPlayerMessage = await createNewPlayer(playerName);
    const response = await createNewGame(gameId);
    setMessages([newPlayerMessage, response.reply]);
    setPlayerItems(response.inventory);
    setRoomsYouCanEnter(response.roomsYouCanEnter);
  } catch (error) {
    console.log(error);
  }
};

const createNewPlayer = async (playerName) => {
  try {
    const response = await fetch(`http://localhost:8080/player/${playerName}`, {
      method: "POST",
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createNewGame = async (gameId) => {
  try {
    const response = await fetch(`http://localhost:8080/game/${gameId}`, {
      method: "POST",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
