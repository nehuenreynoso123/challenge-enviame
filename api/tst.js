var faker = require('faker');

const data = [...Array(10)].map(()=>({
    name: faker.company.companyName(),
    address: faker.address.streetAddress()
}))
console.log(data)