const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const usersConnectionController = require('./controller/usersConnectionController');
const gameController = require('./controller/gameController');
const {SERVER_CONNECT_PLAYER,
      SERVER_DISCONNECT_PLAYER,
      UPDATE_PLAYERS_ONLINE,
      SERVER_FIRE_WEAPON_REMOTE,
      SEND_WINNER} = require('./utils/constans')

// starts express server.
const app = express();

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));

  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname + '/../', "client", "build", "index.html"))
  })
}

// Handles Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header('Access-Access-Control-Allow-Methods', '*');
      return res.status(200).json({});
  }
  next();
});

const server = http.Server(app);
const io = socketio(server);
server.listen(port, () => console.log(`server started at port ${port}`));
console.log('=========');

// Variable que indica el total de usuarios conectados.
let totalUsersConnected = 0;

// Jugadores que le han dado click al botón "Cambiar Modo" para jugar online.
global.players = [];
global.playeroneId = null;
global.playertwoId = null;
//the players in the game.
global.availablesPlayers = {
  playerOne: true,
  playerTwo: true
};

// Weapon from the firt player.
let weaponPlayerOne = null;

// Weapon from the second player.
let weaponPlayerTwo = null

// Elemento de conexión.
let element = null;

io.on('connection', function (socket) {

  totalUsersConnected++;

  io.emit('action', {
    type: UPDATE_PLAYERS_ONLINE,
    payload: players.length
  });

  // Acciones identificadas como ejecutadas por redux del lado del cliente..
  socket.on('action', (action) => {

    switch (action.type) {
      case SERVER_CONNECT_PLAYER: 
      // Make the connection player vs player into the client 
        let resultConnection = usersConnectionController.connectPlayer(players, socket, availablesPlayers, action);
        availablesPlayers = resultConnection.availablesPlayers;
        io.emit('action', {
          type: UPDATE_PLAYERS_ONLINE,
          payload: resultConnection.players.length
        });
        break;
      
      case SERVER_DISCONNECT_PLAYER: 
      // if a player is disconnected stops the game
        let resultDisConnection = usersConnectionController.disconnectPlayer(action, players, availablesPlayers);
        availablesPlayers = resultDisConnection.availablesPlayers;
        io.emit('action', {
          type: UPDATE_PLAYERS_ONLINE,
          payload: resultDisConnection.players.length
        });
        break;

      case SERVER_FIRE_WEAPON_REMOTE: 
      // Someone makes a movement.
      let resultFareWeapon = gameController.fareWeapon(weaponPlayerOne, weaponPlayerTwo, socket, action, players);
        if (resultFareWeapon.weaponPlayerOne) {
          global.playeroneId = action.user;
          weaponPlayerOne = resultFareWeapon.weaponPlayerOne;
        }
        if (resultFareWeapon.weaponPlayerTwo) {
          global.playertwoId = action.user;
          weaponPlayerTwo = resultFareWeapon.weaponPlayerTwo;
        }
        if (resultFareWeapon.weaponPlayerOne && resultFareWeapon.weaponPlayerTwo) {
          let winner = gameController.getWinner(resultFareWeapon.weaponPlayerOne, resultFareWeapon.weaponPlayerTwo, action, socket)
          io.emit('action', {
            type: SEND_WINNER,
            payload: winner,
            user:  winner == 'playerOne' ? global.playeroneId : winner == 'playerTwo' ? global.playertwoId: '',
          });
          weaponPlayerOne = null;
          weaponPlayerTwo = null;
        }
        break;

      default:
        break;
    }

    return;

  });

  //exent when a disconect happens.
  socket.on('disconnect', function () {

    totalUsersConnected--;
    removeSocketId(socket.id);
    weaponPlayerOne = null;
    weaponPlayerTwo = null;

    io.emit('action', {
      type: UPDATE_PLAYERS_ONLINE,
      payload: players.length
    });

  });

});

// Asigna al jugador si es el jugador 1 o el jugador 2.
function setAvailablePlayer(numberPlayer) {
  if (numberPlayer == 0) {
    availablesPlayers.playerOne = true;
  } else if (numberPlayer == 1) {
    availablesPlayers.playerTwo = true;
  }
}


// Elimina la conexion por socketId del arreglo de jugadores disponibles.
function removeSocketId(socketId) {
  players = players.filter((player) => {
    if (player.socketId == socketId) {
      setAvailablePlayer(player.playerNumber);
    }
    return player.socketId !== socketId;
  });
}