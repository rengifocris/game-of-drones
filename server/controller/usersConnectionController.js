const {CONNECT_PLAYER_SUCCESS} = require('../utils/constans')
const game =  require('../model/game');
// connect the player
 const connectPlayer = (players, socket, availablesPlayers, action) => {

    let {availablePlayer, availablesPlayersToConnect} = getAvailablePlayer(availablesPlayers);
    element = findElementBySocketId(socket.id, players);
    availablesPlayers = availablesPlayersToConnect;

    if (!element) {
      players.push({
        socketId: socket.id,
        playerNumber: availablePlayer
      });
    }

    socket.emit('action', {
      type: CONNECT_PLAYER_SUCCESS,
      payload: {
        socketId: socket.id,
        playerNumber: availablePlayer,
      }
    });

    if (availablePlayer == 0) {
        global.playeroneId = socket.id;
        // game.saveGameResults(action, socket);
    }
    else {
        global.playertwoId = socket.id;
    }

    return ({
        socket: socket,
        players: players,
        availablesPlayers: availablesPlayers
    });
}

// disconnect the player
const disconnectPlayer = (action, players, playersToConnect) => {

    players = removeSocketId(action.payload.socketId, players, playersToConnect);
    playersToConnect = setAvailablePlayer(action.payload.playerNumber, playersToConnect);

    return ({
        availablesPlayers: playersToConnect,
        players: players
    })
}


// gets the player in the "sesion" 1 or 2 if there is not anyone return -1.
const getAvailablePlayer = (availablesPlayers) => {
    if (availablesPlayers.playerOne) {
        availablesPlayers.playerOne = false;
        return ({
            availablePlayer: 0,
            availablesPlayersToConnect: availablesPlayers,
        });
    } else if (availablesPlayers.playerTwo) {
        availablesPlayers.playerTwo = false;
        return ({
            availablePlayer: 1,
            availablesPlayersToConnect: availablesPlayers,
        });
    }
    return ({
        availablePlayer: -1,
        availablesPlayersToConnect: availablesPlayers
    });
}

// finds the conection y te socket id from the users avalibles.
const findElementBySocketId = (socketId, players) => {
    return players.find((element) => {
        return element.socketId == socketId;
    });
}

// Deletes the conection by the socket from the users avalibles.
const removeSocketId = (socketId, players, playersToConnect) => {
    players = players.filter((player) => {
    if (player.socketId == socketId) {
        setAvailablePlayer(player.playerNumber, playersToConnect);
    }
    return player.socketId !== socketId;
    });
    
    return players;
}

// put to the user the order one or two.
const setAvailablePlayer = (numberPlayer, availablesPlayersToConnect) => {
    if (numberPlayer == 0) {
        availablesPlayersToConnect.playerOne = true;
    } else if (numberPlayer == 1) {
        availablesPlayersToConnect.playerTwo = true;
    }
    return availablesPlayersToConnect;
  }
    
module.exports = {connectPlayer, disconnectPlayer, findElementBySocketId};