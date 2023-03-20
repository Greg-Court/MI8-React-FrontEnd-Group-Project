import React from 'react'

export const initialiseApp = async (playerName, gameId) => {
    await createNewPlayer(playerName);
    await createNewGame(gameId);
}

const createNewPlayer = async (playerName) => {
    try {
        const response = await fetch(`http://localhost:8080/player/${playerName}`, {
            method: 'POST'
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const createNewGame = async (gameId) => {
    try {
        const response = await fetch (`http://localhost:8080/game/${gameId}`, {
            method: 'POST'
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}