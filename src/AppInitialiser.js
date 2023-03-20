export const initialiseApp = async (
  playerName,
  gameId,
  setMessage,
  setItems,
  setRoomsYouCanEnter
) => {
  try {
    const response = await createNewPlayer(playerName);
    setMessage(response.reply);
    setItems(response.inventory);
    setRoomsYouCanEnter(response.roomsYouCanEnter);
    await createNewGame(gameId);
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
    console.log(data);
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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
