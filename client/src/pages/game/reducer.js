import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import {
    FIRE_WEAPON, SERVER_FIRE_WEAPON_REMOTE, CHANGE_MODE,
    CONNECT_PLAYER_SUCCESS, FIRE_WEAPON_REMOTE_SUCCESS, SEND_WINNER, RESET_BOARD,
    UPDATE_PLAYERS_ONLINE, RESET_ANSWERS
} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    socketId: null, // indentity  socket.
    mode: MODE_PLAYER_COMPUTER, // Mode
    playerNumber: null, // Number of the player
    answerPlayer: null, // Response from PJ 1
    answerPlayerTwo: null, // playername
    answerComputer: null, // Response from PC 1
    winner: null, // Wiinner
    playerName: null, // player name
    scorePlayer: 0, // Score pj 1
    scorePlayerTwo: 0, // Score pj 2
    scoreComputer: 0, // Score from PC
    playersOnline: 0, // Number of players
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case FIRE_WEAPON:
            return update(state, {
                answerPlayer: { $set: action.payload.answerPlayer },
                answerComputer: { $set: action.payload.answerComputer },
                scoreComputer: { $apply: (value) => action.payload.winner === 'computer' ? value + 1 : value },
                scorePlayer: { $apply: (value) => action.payload.winner === 'player' ? value + 1 : value }
            });

        case CHANGE_MODE:
            return update(state, {
                mode: { $apply: (mode) => mode == MODE_PLAYER_COMPUTER ? MODE_PLAYER_PLAYER : MODE_PLAYER_COMPUTER }
            });

        case RESET_BOARD:
            return update(state, {
                socketId: { $set: null },
                playerNumber: { $set: null },
                answerPlayer: { $set: null },
                answerPlayerTwo: { $set: null },
                answerComputer: { $set: null },
                winner: { $set: null },
                scorePlayer: { $set: 0 },
                scorePlayerTwo: { $set: 0 },
                scoreComputer: { $set: 0 },
            });

        case RESET_ANSWERS:

            if (state.playerNumber == 0 || state.playerNumber == 1) {
                return update(state, {
                    answerPlayer: { $set: null },
                    answerPlayerTwo: { $set: null },
                    answerComputer: { $set: null },
                    winner: { $set: null },
                });
            }

            return state;

        case CONNECT_PLAYER_SUCCESS:
            return update(state, {
                socketId: { $set: action.payload.socketId },
                playerNumber: { $set: action.payload.playerNumber },
            });

        case UPDATE_PLAYERS_ONLINE:
            return update(state, {
                playersOnline: { $set: action.payload },
            });

        case SERVER_FIRE_WEAPON_REMOTE:
            if (state.playerNumber == 0 || state.playerNumber == 1) {
                return update(state, {
                    answerPlayer: { $apply: (value) => state.playerNumber == 0 ? action.payload : value },
                    answerPlayerTwo: { $apply: (value) => state.playerNumber == 1 ? action.payload : value },
                    playerName: { $set: action.user }
                });
            }

            return state;

        case FIRE_WEAPON_REMOTE_SUCCESS:
            if (state.playerNumber == 0 || state.playerNumber == 1) {

                return update(state, {
                    answerPlayer: { $apply: (value) => action.payload.playerNumber == 0 ? action.payload.move : value },
                    answerPlayerTwo: { $apply: (value) => action.payload.playerNumber == 1 ? action.payload.move : value },
                    playerName: { $set: action.user }
                });
            }

            return state;

        case SEND_WINNER:
            return update(state, {
                winner: { $set: action.payload },
                scorePlayer: { $apply: (value) => action.payload == 'playerOne' ? value + 1 : value },
                scorePlayerTwo: { $apply: (value) => action.payload == 'playerTwo' ? value + 1 : value },
                playerName: { $set: action.user }
            });

        default:
            return state;
    }
}