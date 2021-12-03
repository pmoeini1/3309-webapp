var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Salsa7706',
    database : 'scouting'
    });

function connect(){

    var connection=null;
    try{

    
     // connect to DB
     connection = mysql.createConnection({
     host     : 'DESKTOP-HBUPP52:3306',
     user     : 'root',
     password : 'Salsa7706',
     database : 'ScoutConnect'
     });
    }
    
    catch(e){
        console.log(e);
    }

    finally {
        console.log(connection)
    }
    return connection;
}


module.exports = connection;