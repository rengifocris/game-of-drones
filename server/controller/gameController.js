const { FIRE_WEAPON_REMOTE_SUCCESS, RESET_ANSWERS} = require('../utils/constans');
const usersConnectionController = require('./usersConnectionController');
const game =  require('../model/game');
//Comparative table to know who is the winner.
const winTable = {
    'rock': { 'rock': 0, 'paper': -1, 'scissors': 1 },
    'paper': { 'rock': 1, 'paper': 0, 'scissors': -1 },
    'scissors': { 'rock': -1, 'paper': 1, 'scissors': 0 }
  };

const fareWeapon = (weaponPlayerOne, weaponPlayerTwo, socket, action, players) => {

    if (!weaponPlayerOne && !weaponPlayerTwo) {
        socket.broadcast.emit('action', {
          type: RESET_ANSWERS
        });
      }
      element = usersConnectionController.findElementBySocketId(socket.id, players);

      if (element.playerNumber == 0) {
        weaponPlayerOne = action.payload;
      } else {
        weaponPlayerTwo = action.payload;
      }

      socket.broadcast.emit('action', {
        type: FIRE_WEAPON_REMOTE_SUCCESS,
        payload: {
          playerNumber: element.playerNumber,
          move: action.payload
        }
      });

      return({
        weaponPlayerOne,
        weaponPlayerTwo
      });
}

// Dependiendo de los disparos de cada jugador se define quien fue el ganador.
const getWinner = (weaponPlayerOne, weaponPlayerTwo, action, socket) => {

    if (winTable[weaponPlayerOne][weaponPlayerTwo] === 0) {
        return 'tie';
    } else {

        if (winTable[weaponPlayerOne][weaponPlayerTwo] === 1) {
          // game.saveResultRound(action, global.playeroneId);
          // let count = game.countRoundsByName(action);
          // if (count >= 3)
          // {
          //  game.updateGame(action, global.playeroneId);
          // }
            return 'playerOne';
        } else {
          // game.saveResultRound(action, global.playeroneId);
          // let count = game.countRoundsByName(action);
          // if (count >= 3)
          // {
          //  game.updateGame(action, global.playeroneId);
          // }
            return 'playerTwo';
        }
    }
    
  }

module.exports = {fareWeapon, getWinner};