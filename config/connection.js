const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    database:"burgers_db",
    user:"root",
    password:"password"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log(`connect as ${connection.threadId}`);
})

module.exports = connection;

