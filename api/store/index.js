const config = require('../config');

var mysql      = require('mysql');
let connection;

function handleConnection() {
       connection = mysql.createConnection({
        host     : config.db.host,
        user     : config.db.user,
        password : config.db.password,
        database : config.db.database
      });
    
    connection.connect((err) => {
      if (err) {
        console.error("[db-error]", err);
        setTimeout(handleConnection, 2000);
      } else console.log("DB CONNECTED");
    });
  
    connection.on("error", (err) => {
      console.error("[db-error]", err);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        handleConnection();
      } else {
        throw err;
      }
    });
  }

handleConnection();

function insert(table,data){
    let sqlQuery=`INSERT INTO ${table} SET ?`
    if(Array.isArray(data)){
        //insert many registers.
        sqlQuery=`INSERT INTO ${table} ( ${Object.keys(data[0]).join(",")} ) VALUES ?`
        data=[data.map(item=>Object.values(item))]
    }

    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,data,(error,result)=>{
            if(error)reject(error)
            resolve(result)
        })
    })
}
function remove(table,id){
    const sqlQuery=`DELETE FROM ${table} WHERE ${id}`
    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,(error,result)=>{
            if(error)reject(error)
            resolve(result)
        })
    })
}
function list(table){
    const sqlQuery=`SELECT * FROM ${table}`
    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,(error,result)=>{
            if(error)reject(error)
            resolve(result)
        })
    })
}
function getId(table,id){
    const sqlQuery=`SELECT * FROM ${table} WHERE id=${id}`
    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,(error,result)=>{
            if(error)reject(error)
            resolve(result)
        })
    })

}
function update(table,data){
    const sqlQuery=`UPDATE ${table} SET ? WHERE id=?`
    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,[data,data.id],(error,result)=>{
            if(error)reject(error)
            resolve(result)
        })
    })
}

function query(table){}

module.exports={list,getId,update,insert,remove}