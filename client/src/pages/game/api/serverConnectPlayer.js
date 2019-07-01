import { SERVER_CONNECT_PLAYER } from '../actionTypes';

/** Conectarse al servidor. */
export default function (player) {
    return {
        type: SERVER_CONNECT_PLAYER,
        payload: {
            player: player
            
        }
    }
}
