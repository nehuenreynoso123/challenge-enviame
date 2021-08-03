const faker = require('faker');
const primeFactors = require('prime-factors');
const fibonacci = require('../../utils/fibonacci');
const palindome = require('../../utils/palindrome');



module.exports=(store)=>{
    async  function ejercicio_3(){   
        return new Promise((resolve,reject)=>{
            const text = "afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood";
            const result = palindome.getTextPalindromes(text);
            resolve(result)
        })
    }
    async  function ejercicio_5(){      
        
       return new Promise((resolve,reject)=>{
        let count = 0;
        let resultPrimeFactor = 0;
        let numFibonacci = 0;
        const maxDivisiones = 1000;
        while(true){        
            numFibonacci = fibonacci(count)
            const primes = primeFactors(numFibonacci);
            const unique =[ ... new Set(primes)]
            resultPrimeFactor = unique.reduce((current,idx)=>{
                const value = primes.filter((item)=>item===idx).length;  
                return (value+1)*current    
            },1);

            if(resultPrimeFactor >= maxDivisiones){
                data = resultPrimeFactor;
                break;
            }
            count++;   
         
        }
        
        const message = `${numFibonacci} es primer numero de la serie de que tiene mas de ${maxDivisiones} divisores, de hecho tiene ${resultPrimeFactor} divisores!`;
        resolve(message)
        
       })
    }    

    async  function ejercicio_6(){      
        
        return new Promise((resolve,reject)=>{
         const randomNumber = faker.datatype.number({
             'min': 0,
             'max': 20
         });              
         const rangeDays = fibonacci(randomNumber-1);
         const distance = randomNumber*100;
         const message = `Rango ${randomNumber}. La distancia es menor a ${distance} km , se entrega en ${rangeDays} días`;
         
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


