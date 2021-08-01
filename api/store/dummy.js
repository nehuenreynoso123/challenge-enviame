
const data_temp={
    empresa:[{empresa1},{empresa1},{empresa1},{empresa1},{empresa1}]
}


function insert(table,data){
    if(data_temp[tale]){
        data_temp[tale]=data_temp[tale].push(data)
    }else{
        data_temp[tale]=[data]
    }
    
}
function remove(table,id){
    const sqlQuery=`DELETE FROM ${table} WHERE ${id}`
    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,(error,data)=>{
            if(error)reject(error)
            resolve(data)
        })
    })
}
function list(table){
    const sqlQuery=`SELECT * FROM ${table}`
    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,(error,data)=>{
            if(error)reject(error)
            resolve(data)
        })
    })
}
function getId(table,id){
    const sqlQuery=`SELECT * FROM ${table} WHERE id=${id}`
    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,(error,data)=>{
            if(error)reject(error)
            resolve(data)
        })
    })

}
function update(table,data){
    const sqlQuery=`UPDATE ${table} SET ? WHERE id=?`
    return new Promise((resolve,reject)=>{
        connection.query(sqlQuery,[data,data.id],(error,data)=>{
            if(error)reject(error)
            resolve(data)
        })
    })
}

function query(table){}

module.exports={list,getId,update,insert,remove}