// se utilizo esta formula general para obtener la succesion de fibonacci dado un numero x
// https://aminoapps.com/c/matematicas-amino/page/blog/la-sucesion-de-fibonacci-tiene-formula/blZM_nrUou87m7VPaV48oj6lap56aYMQ1E
const fibonacci=(range)=>{
    const raiz_cinco=Math.sqrt(5);
    const expresion_1=((1+raiz_cinco)/2)
    const expresion_2=((1-raiz_cinco)/2)
    const expresion_3=Math.pow(expresion_1,range)-Math.pow(expresion_2,range)
    const ecuacion=expresion_3/raiz_cinco;
    return Math.trunc(ecuacion);
  }

  

  module.exports=fibonacci;