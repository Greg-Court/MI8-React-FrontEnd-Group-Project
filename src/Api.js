const BASE_URL = 'http://localhost:8080';

export const createNewPlayer = async (playerName) => {
  try {
    const response = await fetch(`${BASE_URL}/player/${playerName}`, {
      method: 'POST',
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewGame = async (gameId) => {
  try {
    const response = await fetch(`${BASE_URL}/game/${gameId}`, {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteGame = async (gameId) => {
  try {
    const response = await fetch(`${BASE_URL}/game/${gameId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const enterRoom = async (gameId, room) => {
    try {
      const response = await fetch(`${BASE_URL}/game/${gameId}/${room}`, {
        method: 'PATCH',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getGame = async () => {
    try {
      const response = await fetch(`${BASE_URL}/game`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getGameById = async (gameId) => {
    try {
      const response = await fetch(`${BASE_URL}/game/${gameId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getAllCharacters = async () => {
    try {
      const response = await fetch(`${BASE_URL}/player`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getCharacterById = async (playerId) => {
    try {
      const response = await fetch(`${BASE_URL}/player/${playerId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deletePlayer = async (playerId) => {
    try {
      await fetch(`${BASE_URL}/player/${playerId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const moveRoom = async (gameId, roomName) => {
    try {
      const response = await fetch(`${BASE_URL}/game/${gameId}/${roomName}`, {
        method: 'PATCH',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getCharacter = async (playerId) => {
    try {
      const response = await fetch(`${BASE_URL}/player/${playerId}`, {
        method: 'GET',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const useItem = async (playerId, itemName) => {
    try {
      const response = await fetch(`${BASE_URL}/player/${playerId}/${itemName}`, {
        method: 'PATCH',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const pickUpItem = async (playerId, addOrRemove, itemName) => {
    try {
      const response = await fetch(`${BASE_URL}/player/${playerId}/${addOrRemove}/${itemName}`, {
        method: 'PUT',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };