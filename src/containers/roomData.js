import lobby from "../assets/rooms/lobby.png";
import plaza from "../assets/rooms/plaza.png";
import basement from "../assets/rooms/basement.png";
import vault from "../assets/rooms/vault.png";
import extraction from "../assets/rooms/extraction.png";
import security from "../assets/rooms/security.png";
import ceosoffice from "../assets/rooms/ceosoffice.png";
import elevatorstatic from "../assets/rooms/elevator.jpg";
import airvents from "../assets/rooms/airvents.jpg";


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
       x2: 2000,
       y2: 500,
       nextRoom: "elevator",
       text: "Go to the elevator",
     },
     {
       x1: 0,
       y1: 0,
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
       x1: 1200,
       y1: 50,
       x2: 1500,
       y2: 150,
       nextRoom: "airvents",
       text: "Go to the airvents",
     },
     {
      x1: 0,
      y1: 0,
      x2: 200,
      y2: 500,
       nextRoom: "plaza",
       text: "Go back to the plaza",
     },
   ],
 },
 airvents: {
   image: airvents,
   clickableAreas: [
     {
       x1: 850,
       y1: 200,
       x2: 1050,
       y2: 420,
       nextRoom: "vault",
       text: "Go to the vault",
     },
   ],
 },
 vault: {
   image: vault,
   clickableAreas: [
     {
       x1: 360,
       y1: 175,
       x2: 500,
       y2: 400,
       nextRoom: "extraction",
       text: "Go to the endroom",
     },
   ],
 },
 elevator: {
   image: elevatorstatic,
   clickableAreas: [
     {
      x1: 500,
      y1: 80,
      x2: 730,
      y2: 430,
       nextRoom: "lobby",
       text: "Go to the lobby",
     },
     {
      x1: 100,
      y1: 80,
      x2: 330,
      y2: 430,
       nextRoom: "basement",
       text: "Go to the basement",
     },
     {
      x1: 1250,
      y1: 80,
      x2: 1485,
      y2: 430,
       nextRoom: "security",
       text: "Go to security",
     },
     {
      x1: 890,
      y1: 80,
      x2: 1115,
      y2: 430,
       nextRoom: "ceosoffice",
       text: "Go to the CEOs office",
     },
   ],
 },
 security: {
   image: security,
   clickableAreas: [
     {
      x1: 0,
      y1: 0,
      x2: 300,
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
      x1: 600,
      y1: 150,
      x2: 800,
      y2: 400,
       nextRoom: "elevator",
       text: "Go to the elevator",
     },
     {
      x1: 1650,
      y1: 100,
      x2: 2000,
      y2: 500,
       nextRoom: "extraction",
       text: "Go to the endroom",
     },
   ],
 },
 extraction: {
   image: extraction,
   clickableAreas: [
     {
      x1: 0,
      y1: 0,
      x2: 300,
      y2: 500,
       nextRoom: "vault",
       text: "Go to the vault",
     },
     {
      x1: 1650,
      y1: 0,
      x2: 2000,
      y2: 500,
       nextRoom: "ceosoffice",
       text: "Go to the ceosoffice",
     },
   ],
 },
};

export default roomData;