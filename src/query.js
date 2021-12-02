export default function Query(action, data) {
    let result;
    try {
        // connect to DB
        var mysql = require('mysql')
        var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dbuser',
        password : 's3kreee7',
        database : 'my_db'
        });

        connection.connect()

        // make the query that finds players of a city
        if (action===1) {
            var query = connection.query("SELECT * FROM Athlete a, Team t WHERE t.cityID ='" + data +
            "' AND t.tName = a.tName");
        }
        // find elite players by position query
        if (action===2) {
            result = connection.query('SELECT a.playerNo, a.aName, a.aPosition, t.tName, t.tConference, t.ranking, c.cityID, c.cityName, c.country FROM Athlete a, Team t, City c WHERE t.ranking <= 100 AND  t.cityID = c.cityID AND t.tName = a.tName AND t.tConference = a.tConference AND a.aPosition = ' + data + "'");
        }
        // find big 10 centers by height
        if (action===3) {
            result = connection.query("SELECT * FROM Athlete WHERE tConference='BIG 10' AND height=" + data);
        }
        // find athletes over a specific age
        if (action===4) {
            result = connection.query("SELECT * FROM Athlete a WHERE a.age = "+data+ ";")


        }
        // find athletes with a specific name
        if (action===5) {

        }
    } catch(e) {
        console.log(e);
    }

    
    return result;
}