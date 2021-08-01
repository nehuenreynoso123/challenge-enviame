const { address } = require("faker")
var faker = require('faker');

const table = 'empresa'
module.exports=(store)=>{
    async function insert(data){
        return await store.insert(table,data)    
    }
    
    async function remove(id){
        return await store.remove(table,id)    
    }
    
    async function update(data){
        return await store.update(table,data)    
    }
    
    async function getId(id){   
        return await store.getId(table,id)    
    }
    
    
    async function list(){
        return await store.list(table)    
    }

    async function insertFakeData(quantity){
        
        const data = [...Array(quantity)].map(()=>({
            name: faker.company.companyName(),
            address: faker.address.streetAddress()
        }))
        console.log(data)
        return await store.insert(table,data)
    }
    
    return {insert,remove,update,getId,list,insertFakeData}
}
