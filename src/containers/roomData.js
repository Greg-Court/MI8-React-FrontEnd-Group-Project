import lobby from "../assets/rooms/lobby.png";
import plaza from "../assets/rooms/plaza.png";
import elevator from "../assets/rooms/elevator.png";
import basement from "../assets/rooms/basement.png";
import vault from "../assets/rooms/vault.png";
// import airvent from "../assets/rooms/airvent.png";


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
       x1: 257,
       y1: 4,
       x2: 408,
       y2: 221,
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
       x1: 257,
       y1: 4,
       x2: 408,
       y2: 221,
       nextRoom: "plaza",
       text: "Go back to the plaza",
     },
   ],
 },
 // airvents: {
 //   image: airvents,
 //   clickableAreas: [
 //     {
 //       x1: 257,
 //       y1: 4,
 //       x2: 408,
 //       y2: 221,
 //       nextRoom: "vault",
 //       text: "Go to the vault",
 //     },
 //   ],
 // },
 // vault: {
 //   image: vault,
 //   clickableAreas: [
 //     {
 //       x1: 257,
 //       y1: 4,
 //       x2: 408,
 //       y2: 221,
 //       nextRoom: "endroom",
 //       text: "Go to the endroom",
 //     },
 //   ],
 // },
 elevator: {
   image: elevator,
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
       x1: 123,
       y1: 123,
       x2: 123,
       y2: 123,
       nextRoom: "basement",
       text: "Go to the basement",
     },
     {
       x1: 123,
       y1: 123,
       x2: 123,
       y2: 123,
       nextRoom: "security",
       text: "Go to security",
     },
     {
       x1: 123,
       y1: 123,
       x2: 123,
       y2: 123,
       nextRoom: "ceosoffice",
       text: "Go to the CEOs office",
     },
   ],
 },
 // security: {
 //   image: security,
 //   clickableAreas: [
 //     {
 //       x1: 10,
 //       y1: 10,
 //       x2: 500,
 //       y2: 500,
 //       nextRoom: "elevator",
 //       text: "Go to the elevator",
 //     },
 //   ],
 // },
 // ceosoffice: {
 //   image: ceosoffice,
 //   clickableAreas: [
 //     {
 //       x1: 257,
 //       y1: 4,
 //       x2: 408,
 //       y2: 221,
 //       nextRoom: "elevator",
 //       text: "Go to the elevator",
 //     },
 //     {
 //       x1: 123,
 //       y1: 123,
 //       x2: 123,
 //       y2: 123,
 //       nextRoom: "endroom",
 //       text: "Go to the endroom",
 //     },
 //   ],
 // },
 // endroom: {
 //   image: endroom,
 //   clickableAreas: [
 //     {
 //       x1: 257,
 //       y1: 4,
 //       x2: 408,
 //       y2: 221,
 //       nextRoom: "vault",
 //       text: "Go to the vault",
 //     },
 //     {
 //       x1: 123,
 //       y1: 123,
 //       x2: 123,
 //       y2: 123,
 //       nextRoom: "ceosoffice",
 //       text: "Go to the ceosoffice",
 //     },
 //   ],
 // },
};

export default roomData;