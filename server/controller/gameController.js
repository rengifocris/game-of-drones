const { FIRE_WEAPON_REMOTE_SUCCESS, RESET_ANSWERS} = require('../utils/constans');
const usersConnectionController = require('./usersConnectionController');

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
const getWinner = (weaponPlayerOne, weaponPlayerTwo) => {

    if (winTable[weaponPlayerOne][weaponPlayerTwo] === 0) {
        return 'tie';
    } else {
        if (winTable[weaponPlayerOne][weaponPlayerTwo] === 1) {
            return 'playerOne';
        } else {
            return 'playerTwo';
        }
    }
    
  }

module.exports = {fareWeapon, getWinner};