import lobby from "../assets/rooms/lobby.png";
import plaza from "../assets/rooms/plaza.png";
import basement from "../assets/rooms/basement.png";
import vault from "../assets/rooms/vault.png";
import extraction from "../assets/rooms/extraction.png";
import security from "../assets/rooms/security.png";
import ceosoffice from "../assets/rooms/ceosoffice.png";
import elevatorstatic from "../assets/rooms/elevator.jpg";
import airvents from "../assets/rooms/airvents.png";


const roomData = {
 plaza: {
   image: plaza,
   clickableAreas: [
     {
       x1: 800,
       y1: 80,
       x2: 900,
       y2: 320,
       nextRoom: "lobby",
       text: "Go to the lobby",
     },
     {
        x1: 75,
        y1: 275,
        x2: 250,
        y2: 400,
       nextRoom: "basement",
       text: "Go to the basement",
     },
   ],
 },
 lobby: {
   image: lobby,
   clickableAreas: [
     {
       x1: 1650,
       y1: 200,
       x2: 1900,
       y2: 450,
       nextRoom: "elevator",
       text: "Go to the elevator",
     },
     {
       x1: 0,
       y1: 4,
       x2: 300,
       y2: 500,
       nextRoom: "plaza",
       text: "Go back to the plaza",
     },
   ],
 },
 basement: {
   image: basement,
   clickableAreas: [
     {
       x1: 257,
       y1: 4,
       x2: 408,
       y2: 221,
       nextRoom: "airvents",
       text: "Go to the airvents",
     },
     {
       x1: 500,
       y1: 200,
       x2: 600,
       y2: 400,
       nextRoom: "plaza",
       text: "Go back to the plaza",
     },
   ],
 },
 airvents: {
   image: airvents,
   clickableAreas: [
     {
       x1: 257,
       y1: 4,
       x2: 408,
       y2: 221,
       nextRoom: "vault",
       text: "Go to the vault",
     },
   ],
 },
 vault: {
   image: vault,
   clickableAreas: [
     {
       x1: 100,
       y1: 50,
       x2: 500,
       y2: 150,
       nextRoom: "extraction",
       text: "Go to the endroom",
     },
   ],
 },
 elevator: {
   image: elevatorstatic,
   clickableAreas: [
     {
       x1: 257,
       y1: 4,
       x2: 408,
       y2: 221,
       nextRoom: "lobby",
       text: "Go to the lobby",
     },
     {
      x1: 800,
      y1: 80,
      x2: 900,
      y2: 320,
       nextRoom: "basement",
       text: "Go to the basement",
     },
     {
       x1: 400,
       y1: 0,
       x2: 600,
       y2: 100,
       nextRoom: "security",
       text: "Go to security",
     },
     {
      x1: 500,
      y1: 80,
      x2: 600,
      y2: 320,
       nextRoom: "ceosoffice",
       text: "Go to the CEOs office",
     },
   ],
 },
 security: {
   image: security,
   clickableAreas: [
     {
       x1: 10,
       y1: 10,
       x2: 500,
       y2: 500,
       nextRoom: "elevator",
       text: "Go to the elevator",
     },
   ],
 },
 ceosoffice: {
   image: ceosoffice,
   clickableAreas: [
     {
       x1: 257,
       y1: 4,
       x2: 408,
       y2: 221,
       nextRoom: "elevator",
       text: "Go to the elevator",
     },
     {
      x1: 800,
      y1: 80,
      x2: 900,
      y2: 320,
       nextRoom: "extraction",
       text: "Go to the endroom",
     },
   ],
 },
 extraction: {
   image: extraction,
   clickableAreas: [
     {
       x1: 257,
       y1: 4,
       x2: 408,
       y2: 221,
       nextRoom: "vault",
       text: "Go to the vault",
     },
     {
      x1: 800,
      y1: 80,
      x2: 900,
      y2: 320,
       nextRoom: "ceosoffice",
       text: "Go to the ceosoffice",
     },
   ],
 },
};

export default roomData;