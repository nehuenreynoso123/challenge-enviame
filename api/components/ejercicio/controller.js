const faker = require('faker');
const fibonacci = require('../../utils/fibonacci');


module.exports=(store)=>{
    async  function ejercicio_3(){   
        return new Promise((resolve,reject)=>{
            resolve("ejercicio 3")
        })
    }
    async  function ejercicio_5(){      
        
       return new Promise((resolve,reject)=>{
        let count=0;
        let data=[];
        let numFibonacci=0;
        const maxDivisiones=1000;
        while(data.length<=maxDivisiones){            
            data=[]
            numFibonacci = fibonacci(count)                    
            for(let divisores=numFibonacci;divisores>=0;divisores--)
            {
                if(numFibonacci%divisores===0){
                    data.push(divisores)        
                }
            }
            count++;
        }
        const message=`${numFibonacci} es primer numero de la serie de que tiene mas de ${maxDivisiones} divisores, de hecho tiene ${data.length} divisores!`;
        resolve(message)
        
       })
    }    

    async  function ejercicio_6(){      
        
        return new Promise((resolve,reject)=>{
         const randomNumber = faker.datatype.number({
             'min': 0,
             'max': 20
         });              
         const rangeDays = fibonacci(randomNumber);
         const distance = randomNumber*100;
         const message = `La distancia es menor a ${distance} km , se entrega en ${rangeDays} días`;
         
         resolve(message);
         
        })
     } 

     async  function ejercicio_7(){         
         const sqlQuery=`
         UPDATE employees e,
         (
             SELECT e.salary * c.anual_adjustment as total, e.id as userid 
             FROM employees e 
             JOIN countries ct on ct.id= e.country_id
             JOIN continents c on ct.continent_id = c.id
         ) salary_adjusment  

         SET e.salary = salary_adjusment.total   
         WHERE  e.salary <= 5000 AND e.id = salary_adjusment.userid

         `;

         return await store.query(sqlQuery)
     }

    
    return {
        ejercicio_3,
        ejercicio_5,
        ejercicio_6,
        ejercicio_7
    }
}


