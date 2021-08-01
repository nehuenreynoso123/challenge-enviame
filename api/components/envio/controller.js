const { address } = require("faker")
var faker = require('faker');

const fakeData={
    "shipping_order": {
        "n_packages": "1",
        "content_description": "ORDEN 255826267",
        "imported_id": "255826267",
        "order_price": "24509.0",
        "weight": "0.98",
        "volume": "1.0",
        "type": "delivery"
    },
    "shipping_origin": {
        "warehouse_code": "401"
    },
    "shipping_destination": {
        "customer": {
            "name": "Bernardita Tapia Riquelme",
            "email": "b.tapia@outlook.com",
            "phone": "977623070"
        },
        "delivery_address": {
            "home_address": {
                "place": "Puente Alto",
                "full_address": "SAN HUGO 01324, Puente Alto, Puente Alto"
            }
        }
    },
    "carrier": {
        "carrier_code": "",
        "tracking_number": ""
    }
}


const table = 'deliveries'

module.exports=(store)=>{
    async function insert(data){
        if(!data) data=fakeData;                    
        return await store.insert(table,data)    
    }  
    
    return {insert}
}
