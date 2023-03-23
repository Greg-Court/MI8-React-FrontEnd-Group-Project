import React from 'react';

const NamePopup = ({ onNameSubmit, setPlayerName, playerName }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent reloading
    onNameSubmit(playerName);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition ease-in-out delay-5000">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-white flex flex-col justify-center items-center min-w-[20%] fade-in">
        <h2 className="text-xl font-bold mb-4">Identify yourself, agent.</h2>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2 mb-4 text-black text-center"
            placeholder="Agent Name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
          <button className="bg-gold-600 text-black font-bold py-2 px-4 rounded-xl animate-pulse duration-1000" type="submit">
            Start Mission
          </button>
        </form>
      </div>
    </div>
  );
};

export default NamePopup;