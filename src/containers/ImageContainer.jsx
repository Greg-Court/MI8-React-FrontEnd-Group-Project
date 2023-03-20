import React from "react";
import lobby from "../assets/rooms/lobby.jpg";
import plaza from "../assets/rooms/plaza.png"

export const ImageContainer = () => {
  const imageSRC = lobby;

  return (
    <div className="imageContainer h-1/2 flex justify-center">
      <img src={plaza} alt="Lobby" className="h-full object-contain"/>
    </div>
  );
};
