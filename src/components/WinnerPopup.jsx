import React from "react";

const WinnerPopup = ({ playerName }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gold-600 border-2 border-gold-300 p-8 rounded-xl shadow-2xl text-black flex flex-col justify-center items-center min-w-[20%] fade-in z-50 transform -translate-y-24">
        <h2 className="text-3xl font-bold">Well done Agent {playerName}! And many thanks to Mati, James and Wilson for an AWESOME back-end to work with.</h2>
      </div>
    </div>
  );
};

export default WinnerPopup;
