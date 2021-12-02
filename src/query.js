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
            var query = connection.query("SELECT * FROM Athlete a, Team t WHERE t.cityID =" + data +
            " AND t.tName = a.tName");
            
        }
        // find elite players by position query
        if (action===2) {
            

        }
        // find big 12 centers by height
        if (action===3) {

        }
        // find athletes over a specific age
        if (action===4) {
            result = connection.query("SELECT * FROM Athlete a WHERE a.age = "+data+ ";")


        }
        // find athletes with a specific name
        if (action===5) {
            result = connection.query("SELECT * FROM ATHLETE a WHERE a.aName = '" + data + "'");

        }
    } catch(e) {
        console.log(e);
    }

    
    return result;
}