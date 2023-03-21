import React, { useState } from "react";
import lobby from "../assets/rooms/lobby.png";
import plaza from "../assets/rooms/plaza.png";

export const ImageContainer = () => {
  const [imageSRC, setImageSRC] = useState(plaza);
  const [showText, setShowText] = useState(false);

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Define the clickable areas of the plaza image
    const clickableAreas = [
      { x1: 257, y1: 4, x2: 408, y2: 221 }
    ];

    // Check if the click event occurred within one of the clickable areas
    for (let area of clickableAreas) {
      if (x >= area.x1 && x <= area.x2 && y >= area.y1 && y <= area.y2) {
        setImageSRC(lobby);
        break;
      }
    }
  };

  const handleMouseOver = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Define the clickable areas of the plaza image
    const clickableAreas = [
      { x1: 257, y1: 4, x2: 408, y2: 221 }
    ];

    // Check if the mouse is over one of the clickable areas
    for (let area of clickableAreas) {
      if (x >= area.x1 && x <= area.x2 && y >= area.y1 && y <= area.y2) {
        setShowText(true);
        break;
      } else {
        setShowText(false);
      }
    }
  };

  return (
    <div className="imageContainer h-1/2 flex justify-center">
      <img
        src={imageSRC}
        alt="Lobby"
        className="h-full object-cover"
        onClick={handleClick}
        onMouseMove={handleMouseOver}
      />
      {showText && (
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white bg-gray-800">
          Go to the lobby
        </div>
      )}
    </div>
  );
};
