# Challenge Enviame
### Requerimientos
- docker

------------

## Despliege
###### Clonar repositorio
`git@github.com:nehuenreynoso123/challenge-enviame.git
`
######  Moverse a la carpeta 
 `cd  /challenge-enviame/stack`
 
######  Desplegar el proyecto
`docker-compose up -d --build`


------------
### Ejercicio 1
Se desarrollo un ambiente de docker  utilizando docker compose en 
el cual internamente tiene tres microservicios:

1. proxy revers utilizando ngnix.

2. Api utilizando imagen de node esta contenida en la carpeta de api.

3. Servicio de base de datos utilizando una imagen de mysql: 
internamente hay un archivo llamado .env , en el cual estan la configuracion y las variables de entorno para poder desplegar el proyecto e internamente hay una carpeta llamada script el cual contiene los script inicial de la base de datos,
tambien hay una carpeta llamada ngnix la cual tiene toda la configuracion del proxy reverse.

### Ejercicio 2
Se desarrollo una api/rest utilizando express node,
en el cual inclui su archivo docker para poder desplegarlo junto al stack, internamente tambien contiene una variable de entorno .env para las configuraciones de entorno, 
para poder probar el ejercicio 2 el endpoint 
es http://localhost:3000/empresa/ 
se pueden hacer distintos metodos: get, post , delete,put.

Para cargar registros fake, hay un endpoint http://localhost:3000/empresa/fake/:quantity
el cual genera N cantidad de registros en la base de datos.

Se utilizo una arquictectura limpia siguiendo el patron de diseño:
[![patron](https://static.platzi.com/media/user_upload/arquitecturaExpress-7ccd71ea-b5ae-4990-ad4d-d8578dfced3c.jpg "patron")](https://static.platzi.com/media/user_upload/arquitecturaExpress-7ccd71ea-b5ae-4990-ad4d-d8578dfced3c.jpg "patron")

el cual cuenta de cuatro capas:

1. Capa de configuracion: es el archivo server.js. El  cual contiene toda la configuracion del servidor como los puertos y los cors.

2. Capa de red: contiene un archivo de response y routes.
el archivo de response es un archivo de respuesta estructurada para que todos los end point envien la respuesta de la misma forma.
el archivo routes.js es el encargado de exponer las rutas

3. Capa de componentes: cada componente es una entidad e internamente cada entidad tiene dos archivos principales, uno es el network es el encargado de manejar toda la parte de los metodos del htpp como el get , post etc y el controller es el encargado de toda la logica del negocio.
internamente existe un archivo index el cual es el encargado de inyectar dependencias,  este archivo de inyeccion lo que te permite es trabajar con multiples store permitiendo escalar a nivel microservicios.

4. Capa de almacenamiento: es el encargado de base de datos , se utiliza un solo archivo para todos los componentes para que sea clean code, esto sirve para en el caso de que se quiera migrar la base de datos a otra tecnologia lo que se hace es modificar este archivo.

### Ejercicio 4
Se desarrollo un nuevo endpoint llamado enviame el cual acepta el metodo post y se puede enviar data,  en caso de que no se envie una data se envia una data por default esta se encuentra en el archivo api/component/envio/controller.js
el cual va a insertar en la base de datos N cantidad de datos fake N cantidad es un requisito del parametro ejemplo: http://localhost:3000/envio/5
utilize el mismo patron de diseño que en el ejercicio 2 , y utilizo la inyeccion de dependencia en lugar de apuntar a la base de datos apunto a un servicio externo a mi sistema.

### Ejercicio 5
Utilize una formula matematica generica de la sucession de fibonacci, ya que utilizando bucles no era la forma mas optima de encontrar la sucession,
se puede calcular el divisor de un numero entero utilizando sus factores primos el cual devuelve el resto de su division.
Factor primo ejemplo:

[![NUMEROS_PRIMOS](https://yosoytuprofe.20minutos.es/wp-content/uploads/2019/11/descomponer-en-factres-primos.png "NUMEROS_PRIMOS")](http://https://yosoytuprofe.20minutos.es/wp-content/uploads/2019/11/descomponer-en-factres-primos.png "NUMEROS_PRIMOS")

entra en un bucle infinito hasta encontrar un numero que tenga mil divisores, este es un proceso muy largo ya que requiere una gran capacidad de computos, ya que es casi exponencial los valores del fibonacci ya que por cada numero es resultado es muy grande y tratar de buscar ese numero primo es muy grande por lo tanto es muy lento.

###### logica de negocio:
 /api/components/ejercicio/controller
###### Ver en api:
http://localhost:3000/ejercicio/5


### Ejercicio 6
Analizando la problematica entendi que sigue el mismo patron de la sucession de fibonacci en el cual cuando va de un numero aleatorio entre 1 a 20 que serian los rangos desdusco que sigue la sucesion de fibonacci, para hacer este ejercicio recicle la funcion de fibonnaci previamente utilizada en el ejercicio 5


###### logica de negocio:
 /api/components/ejercicio/controller
###### Ver en api:
http://localhost:3000/ejercicio/6


### Ejercicio 7
Se desarrollo un update con una subconsulta la cual relaciona las tablas de employees , countries y continents la cual me devuelve el total del sueldo correspodiente al continente al que pertenece, y el id de id de usuario para agregarlo en la condicion del update  

###### logica de negocio:
/api/components/ejercicio/controller

###### Ver en api:
http://localhost:3000/ejercicio/7