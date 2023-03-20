import { createNewPlayer, createNewGame } from "./Api";

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
    setMessages([
        { type: 'receive', text: newPlayerMessage },
        { type: 'receive', text: response.reply },
      ]);
    setPlayerItems(response.inventory);
    setRoomsYouCanEnter(response.roomsYouCanEnter);
  } catch (error) {
    console.log(error);
  }
};
