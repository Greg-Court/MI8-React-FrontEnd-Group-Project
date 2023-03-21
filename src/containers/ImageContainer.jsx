import React, { useState } from "react";
import lobby from "../assets/rooms/lobby.png";
import plaza from "../assets/rooms/plaza.png";
import elevator from "../assets/rooms/elevator.png";
// import basement from "../assets/rooms/basement.png";
// import vault from "../assets/rooms/vault.png";
// import airvent from "../assets/rooms/airvent.png";
export const ImageContainer = () => {
  const [imageSRC, setImageSRC] = useState(plaza);
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("Go to the lobby");
  const [clickableAreas, setClickableAreas] = useState([
    { x1: 257, y1: 4, x2: 408, y2: 221 }
  ]);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    // Define the clickable areas of the plaza and lobby images
    const lobbyClickableAreas = [
      { x1: 1287, y1: 138, x2: 1379, y2: 305 }
    ];
    // Check if the click event occurred within one of the clickable areas
    for (let area of clickableAreas) {
      if (x >= area.x1 && x <= area.x2 && y >= area.y1 && y <= area.y2) {
        setImageSRC(lobby);
        setClickableAreas(lobbyClickableAreas);
        setText("Go to the elevator");
        setBackgroundImage(null);
        break;
      }
    }
    for (let area of lobbyClickableAreas) {
      if (x >= area.x1 && x <= area.x2 && y >= area.y1 && y <= area.y2) {
        setImageSRC(elevator);
        setBackgroundImage(elevator);
        setClickableAreas([]);
        setText("");
        break;
      }
    }
  };
  const handleMouseOver = (event) => {
    const x = event.clientX;
    const y = event.clientY;
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
          {text}
        </div>
      )}
    </div>
  );
};
