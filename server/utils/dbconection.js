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

module.export = pgConnection();

/*client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});*/