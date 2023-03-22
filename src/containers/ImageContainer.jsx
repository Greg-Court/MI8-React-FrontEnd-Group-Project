import React, { useState, useRef, useEffect } from "react";
import roomData from "./roomData";
import { enterRoom } from "../Api";

// Function to generate image map component
const ImageMap = ({
  currentRoom, // key of current room from roomData object
  roomsYouCanEnter, // array of room keys that user is allowed to enter
  setRoomsYouCanEnter,
  setCurrentRoom, // to change the state of the current room
  setShowText, // to control visibility of the text overlay
  setText, // to set what is in the overlay
  setMessages, // to set messages
  messages,
  setPlayerItems,
  gameId
}) => {
  const room = roomData[currentRoom];

  // logic to move to the next room if the area clicked is legitness
  const handleAreaClick = async (area, messages) => {
    // Check if the user is allowed to enter the room they clicked on
    if (roomsYouCanEnter.includes(area.nextRoom)) {
      const nextRoom = area.nextRoom;
      // Call the enterRoom API function to get a response
      const response = await enterRoom(gameId, nextRoom);
      // If there's a response, update the current room and messages
      if (response) {
        setRoomsYouCanEnter(response.roomsYouCanEnter)
        setShowText(false);
        setText("");
        setCurrentRoom(nextRoom);
        setMessages([
          ...messages,
          { type: "send", text: `I just entered ${nextRoom}` },
          { type: "receive", text: response.reply },
        ]);
        setPlayerItems(response.inventory);
      }
    }
  };

  return (
    // ignore div with classname relative, is it only here to provide a development overlay to see where the areas are
    <div className="relative">
      {/* we give the map a name attribute to associate the map with an image - SEE IMG TAG AT BOTTOM OF PAGE FOR FURTHER EXPLANATION */}
      <map name={currentRoom}>
        {room.clickableAreas.map((area, index) => (
          // generate area tags for each clickable area in the current room
          // for each 'area' in clickableAreas (see roomData.js) it generates an <area> tag with the required attibutes and event handlers
          // index is used as the key prop, which is used by react (helps efficienty update DOM when list changes)
          <area
            key={index}
            shape="rect"
            coords={`${area.x1},${area.y1},${area.x2},${area.y2}`}
            onClick={() => handleAreaClick(area, messages)}
            onMouseOver={() => {
              // shows go to next room text
              if (roomsYouCanEnter.includes(area.nextRoom)) {
                setShowText(true);
                setText(area.text);
              }
            }}
            onMouseOut={() => {
              // hides go to next room text
              if (roomsYouCanEnter.includes(area.nextRoom)) {
                setShowText(false);
                setText("");
              }
            }}
          />
        ))}
      </map>
      {/*----------------------------------------------- Temporary overlay for development -----------------------------------------------*/}
      {room.clickableAreas.map((area, index) => (
        <div
          key={index}
          className="fixed bg-red-500 opacity-50 pointer-events-none"
          style={{
            top: area.y1,
            left: area.x1,
            width: area.x2 - area.x1,
            height: area.y2 - area.y1,
          }}
        />
      ))}
      {/*----------------------------------------------- Temporary overlay for development -----------------------------------------------*/}
    </div>
  );
};

// Main ImageContainer component
export const ImageContainer = ({ roomsYouCanEnter, setMessages, messages, gameId, setRoomsYouCanEnter }) => {
  const [currentRoom, setCurrentRoom] = useState("plaza");
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="imageContainer h-1/2 flex justify-center bg-black">
      <img
        src={roomData[currentRoom].image}
        alt={currentRoom}
        className="h-full object-cover"
        // when useMap attribute in an <img> tag has the same value as the name attribute in a <map> tag,
        // the image becomes sensitive to clickable areas defined within the map tag to the value of currentRoom
        // this allows clickable areas to be updated dynamically based on value of currentRoom
        useMap={`#${currentRoom}`}
      />
      <ImageMap
        currentRoom={currentRoom}
        roomsYouCanEnter={roomsYouCanEnter}
        setRoomsYouCanEnter={setRoomsYouCanEnter}
        setCurrentRoom={setCurrentRoom}
        setShowText={setShowText}
        setText={setText}
        setMessages={setMessages}
        messages={messages}
        gameId={gameId}
      />
      {showText && (
        <div className="bg-glow fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-[-100px] text-5xl animate-pulse bg-black bg-opacity-10 font-bold text-white rounded-full px-6 py-4">
          {text}
        </div>
      )}
    </div>
  );
};

// this is a random comment

