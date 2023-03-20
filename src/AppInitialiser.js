export const initialiseApp = async (
  playerName,
  gameId,
  setMessage,
  setItems,
  setRoomsYouCanEnter
) => {
  try {
    const newPlayerMessage = await createNewPlayer(playerName);
    setMessage(newPlayerMessage);
    const response = await createNewGame(gameId);
    setMessage(response.reply);
    setItems(response.inventory);
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
