const dbConnection = require('../utils/dbconnection');

 const saveResultRound = (action, socketid) => {
    console.log('action.user', action.user);
    let client = dbConnection.pgConnection();
    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }

        let idGame = null;
        let selectQuery = "SELECT id from game WHERE nombre = 'Game"+ action.user + socketid + "'";

        let insertQuery = "INSERT INTO round (player, roundwin, idgame) VALUES ( '"+ action.user +"', 'yes','"+ getGameByName(action.user, socketid) +"')";
        
        client.query(insertQuery, function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          else {
            console.log(result);
          }
          
          client.end();
        })
    });
}

const getGameByName = (name, playeroneId) => {
    let client = dbConnection.pgConnection();
    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        console.log('Game'+name + playeroneId);
        let selectQuery = "SELECT id from game WHERE nombre = 'Game"+ name + playeroneId + "'";
        
        client.query(selectQuery, function(err, result) {
            if(err) {
              return console.error('error running query', err);
            }
            console.log(result.rows[0].id);

            client.end();
            return result.rows[0].id;
        });
    });
}

const countRoundsByName = (action) => {
    let client = dbConnection.pgConnection();
    console.log(action);
    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }

        let selectQuery = "SELECT  COUNT(roundwin) AS roundwinCount  from round WHERE player = '"+ action.user + "' AND roundwin = 'true'";
        
        client.query(selectQuery, function(err, result) {
            if(err) {
              return console.error('error running query', err);
            }
            console.log(result.rows[0].roundwinCount);

            client.end();
            return result.rows[0].roundwinCount;
        });
    });
}

const saveGameResults = (action, socket) => {
    let client = dbConnection.pgConnection();
    console.log(action);
    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        let insertQuery = "INSERT INTO game  (nombre) VALUES ( 'Game"+ action.payload.player + socket.id +"')";

        client.query(insertQuery, function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          console.log(result);
          client.end();
        })
    });
}

const updateGame = (action, socket) => {
    let client = dbConnection.pgConnection();
    console.log(action);
    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        let idGame = getGameByName(action.user, socket);
        let updateQuery = "UPDATE game SET player = '"+ action.user+"' WHERE id = '"+idGame+"'";
        
        client.query(updateQuery, function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          console.log(result);
          client.end();
        })
    });
}
module.exports = {
    saveGameResults,
    saveResultRound,
    countRoundsByName,
    getGameByName,
    updateGame
}