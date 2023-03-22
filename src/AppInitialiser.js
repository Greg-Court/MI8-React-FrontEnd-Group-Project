import { createNewPlayer, createNewGame } from "./Api";

const newPlayerMessage = "Good evening agent player1. Your destination will be in Singapore, within the inonic Marina Bay Sands. Your target is Specter, the infamous global crime syndicate. We have reason to believe they have taken up residency in the building and your mission objective is to cripple their operations. You will be dropped outside the building and will have to make your own way in and figure out a way to bring them down. Good luck agent player1, we are counting on you."

export const initialiseApp = async (
  playerName,
  setMessages,
  setPlayerItems,
  setRoomsYouCanEnter,
  setGameId,
  setPlayerId,
  setCurrentRoom
) => {
  try {
    const newPlayer = await createNewPlayer(playerName);
    console.log(newPlayer);
    const gameReply = await createNewGame(newPlayer.id);
    console.log(gameReply);
    setMessages([
        { type: 'receive', text: newPlayerMessage },
        { type: 'receive', text: gameReply.reply },
      ]);
    setPlayerItems(gameReply.inventory);
    setRoomsYouCanEnter(gameReply.roomsYouCanEnter);
    setPlayerId(newPlayer.id)
    setGameId(gameReply.gameId)
    setCurrentRoom("plaza")
  } catch (error) {
    console.log(error);
  }
};
