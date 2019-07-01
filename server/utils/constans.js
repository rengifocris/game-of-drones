
//Accions used with redux.
module.exports = {
    SERVER_CONNECT_PLAYER : `server/game/SERVER_CONNECT_PLAYER`,
    SERVER_DISCONNECT_PLAYER : `server/game/SERVER_DISCONNECT_PLAYER`,
    CONNECT_PLAYER_SUCCESS : `game/CONNECT_PLAYER_SUCCESS`,
    UPDATE_PLAYERS_ONLINE : `game/UPDATE_PLAYERS_ONLINE`,
    SERVER_FIRE_WEAPON_REMOTE : 'server/game/SERVER_FIRE_WEAPON_REMOTE',
    FIRE_WEAPON_REMOTE_SUCCESS : 'game/FIRE_WEAPON_REMOTE_SUCCESS',
    SEND_WINNER : 'game/SEND_WINNER',
    RESET_ANSWERS : 'game/RESET_ANSWERS',
    DBCONFIGURATION: {
        database: 'ytustagy',
        password: 'EAk34_fzKXe7xZD0ZlbJ0eX_zBzokVhr',
        port: '5432',
        domain: '@motty.db.elephantsql.com'
    }
} 