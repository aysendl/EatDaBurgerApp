const mysql = require("mysql");
var connection;


if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        database:"burgers_db",
        user:"root",
        password:"password"
    });
}
connection.connect((err)=>{
    if(err) throw err;
    console.log(`connect as ${connection.threadId}`);
})

module.exports = connection;

