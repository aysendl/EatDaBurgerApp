const connection = require("./connection");

const orm={

    selectAll(columns,tableName,cb){
        connection.query("SELECT ?? FROM ??",[columns, tableName],(err, results)=>{
            if(err) throw err;
            cb(results);
        });
    },

    insertOne(){
   
    },
    updateOne(){

    }
};

module.exports =orm;
