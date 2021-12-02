var connection = require('./connection')

function Query(action, data) {
    let result;
    try {
        // connect to DB
        // var mysql = require('mysql')

        connection.connect()

        // make the query that finds players of a city
        if (action===1) {
            result = connection.query("SELECT * FROM Athlete a, Team t WHERE t.cityID ='" + Number(data) +
            "' AND t.tName = a.tName;");
        }
        // find elite players by position query
        else if (action===2) {
            result = connection.query("SELECT a.playerNo, a.aName, a.aPosition, t.tName, t.tConference, t.ranking, c.cityID, c.cityName, c.country FROM Athlete a, Team t, City c WHERE t.ranking <= 100 AND  t.cityID = c.cityID AND t.tName = a.tName AND t.tConference = a.tConference AND a.aPosition = '" + String(data) + "';");
        }
        // find big 10 centers by height
        else if (action===3) {
            result = connection.query("SELECT * FROM Athlete WHERE tConference='BIG 10' AND height=" + Number(data) + ';');
        }
        // find athletes over a specific age
        else if (action===4) {
            result = connection.query("SELECT * FROM Athlete a WHERE a.age = "+ Number(data) + ";")
        }
        // find athletes with a specific name
        else if (action===5) {
            result = connection.query("SELECT * FROM ATHLETE a WHERE a.aName = '" + String(data) + "'");

        }
    } catch(e) {
        console.log(e);
    }
    console.log(result)
    
    return result;
}

module.exports = Query;