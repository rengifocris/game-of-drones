var pg = require('pg');
const {DBCONFIGURATION}  = require('./constans');

const conString = "postgres://"+ DBCONFIGURATION.database + ":" + 
                    DBCONFIGURATION.password +
                    DBCONFIGURATION.domain + ":" + 
                    DBCONFIGURATION.port + "/" + 
                    DBCONFIGURATION.database; 

const pgConnection = () => {

    var client = new pg.Client(conString);
    return client;
}

module.exports = {pgConnection};

