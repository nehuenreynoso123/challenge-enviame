# Challenge Enviame
### Requerimientos
- docker
- puerto 3000 y 3306 (tcp). Verificar si esta abierto en la regla de firewall 

> Si no sabe agregar una regla a su sistema operativo se le recomiendo desabilitar el firewall.

###### Verificacion de firewall.

> Utilizando Telnet.

```bash
telnet <ip> 3000
```

### Firewall

##### Windows

1. Panel de control
2. Firewall de Windows Defender
3. Configuracion Avanzada

###### Regla de entrada / Salida (Es lo mismo para los 2)

1. Nueva regla de entrada / Salida
2. Seleccionar Puerto
3. Seleccionar TCP
4. Seleccionar "Puerto locales espeficico"
5. Ingresar el puerto 3000
6. Permitir la conexion.
7. Seleccionar los Dominio, Privado y Publico.
8. Darle un nombre a la regla.

##### Linux

> Instalacion de firewall UFW

```bash
sudo apt-get install ufw
```

> Abro el puerto 3000

```bash
sudo ufw allow 3000
```

> Reinicio del firewall

```bash
sudo service ufw restart
```


------------

# Instalacion
> 1. Clonar repositorio

```bash
git clone git@github.com:nehuenreynoso123/challenge-enviame.git
```
> 2. Mover a la carpeta raiz del proyecto.

```bash
cd ./challenge-enviame/stack 
```
> 3.Desplegar el proyecto

```bash
 docker-compose up -d --build
```

------------
#Resumen

|  Ejercicio | Metodo  |  URL  |  Logica  |
| ------------ | ------------ | ------------ | ------------ |
|  1  | --  | --  |  stack |
| 2  | CURL  | http://localhost:3000/empresa  |  /api/components/empresa | 
| 2  test fake | POST  | http://localhost:3000/empresa/fakeData/5  |  /api/components/empresa/controller | 
| 3  | GET  | http://localhost:3000/ejercicio/3  |  /api/components/ejercicio | 
| 4  | POST  | http://localhost:3000/envio  |  /api/components/envio | 
| 5  | GET  | http://localhost:3000/ejercicio/5  |  /api/components/ejercicio | 
| 6  | GET  | http://localhost:3000/ejercicio/6  |  /api/components/ejercicio | 
| 7 | GET  | http://localhost:3000/ejercicio/7  |  /api/components/ejercicio | 


------------
### Ejercicio 1
Se desarrollo un ambiente de docker  utilizando docker compose en 
el cual internamente tiene tres servicios:

- proxy reverso utilizando ngnix.

- Api utilizando imagen de node esta contenida en la carpeta de api.

- Servicio de base de datos utilizando una imagen de mysql
 

internamente hay un archivo llamado .env , en el cual estan la configuracion y las variables de entorno para poder desplegar el proyecto.
 Existe una carpeta llamada script el cual contiene los script inicial de la base de datos, y  una carpeta llamada ngnix la cual tiene toda la configuracion del proxy reverso.

### Ejercicio 2
Se desarrollo una api-rest utilizando express y node.js,
en el cual se incluyo su archivo docker para poder desplegar la aplicacion junto al stack.
 internamente tambien contiene un archivo .env para las configuraciones de entorno.

para poder probar el ejercicio 2 el endpoint 
es http://localhost:3000/empresa/ 
se pueden hacer distintos metodos: get, post , delete,put.
Para insertar tados tiene que ser de la siguiente manera:
Ejemplo CURL:

```bash
curl -d '{"name":"nombre-empresa", "address":"direccion"}'  -H "Content-Type: application/json" -X POST http://localhost:3000/empresa
```


Para cargar registros fake, hay un endpoint 
http://localhost:3000/empresa/fake/:quantity
el cual genera N cantidad de registros en la base de datos.
Se debe hacer la request con un metodo POST.

Ejemplo: cargar 5 registros fake utilizando curl.
```bash
curl -X POST http://localhost:3000/empresa/fake/5
```

Se utilizo una arquictectura limpia siguiendo el patron de diseño:
[![patron](https://static.platzi.com/media/user_upload/arquitecturaExpress-7ccd71ea-b5ae-4990-ad4d-d8578dfced3c.jpg "patron")](https://static.platzi.com/media/user_upload/arquitecturaExpress-7ccd71ea-b5ae-4990-ad4d-d8578dfced3c.jpg "patron")

el cual cuenta de cuatro capas:

1. Capa de configuracion: es el archivo server.js. El  cual contiene toda la configuracion del servidor como los puertos y los cors.

2. Capa de red: contiene un archivo de response y routes.
el archivo de response es un archivo de respuesta estructurada para que todos los end point envien la respuesta de la misma forma.
el archivo routes.js es el encargado de exponer las rutas

3. Capa de componentes: cada componente es una entidad e internamente cada entidad tiene dos archivos principales, uno es el network es el encargado de manejar toda la parte de los metodos del htpp como el get , post etc y el controller es el encargado de toda la logica del negocio.
internamente existe un archivo index el cual es el encargado de inyectar dependencias al controller,  este archivo de inyeccion lo que te permite es trabajar con multiples store permitiendo escalar a nivel microservicios.

4. Capa de almacenamiento: es el encargado de base de datos , se utiliza un solo archivo para todos los componentes para que sea clean code, esto sirve para en el caso de que se quiera migrar la base de datos a otra tecnologia lo que se hace es modificar este archivo.

### Ejercicio 3
Se busco toda secuencia de caracteres que sean palindromas, en este caso se compara el primer caracter con el segundo caracter si es correcto se guarda como palindromo,
caso contrario pregunta el primer caracter con el tercer caracter si es correcto entra en un bucle.
en el cual empieza a preguntar el primer caracter menos 1 se desplaza una posicion hacia atras y el caracter final + 1 se desplaza hacia la derecha
y se ejecuta un bucle infinito hasta que encuentra una palabra que no sea palindromo, el resultado del bucle se guarda en una variable la cual se muestra posteriormente..
Ejemplo: qeasdgneuquenfdsg
```js
ne //no es palindromo
neu //no es palindromo

eu //no es palindromo
euq //no es palindromo

uq //no es palindromo
uqu //ES  PALINDROMO

despues de esto, empieza a moverse hacia los costados para obtener la palabra completa palindromo, hasta que deje ser palindormo.

euque //ES  PALINDROMO
neuquen //ES  PALINDROMO
gneuquenf  //no es palindromo

En este caso la ultima palabra palindromo, es la que se almacena, en este caso:
neuquen

```


###### logica de negocio:
 /api/components/ejercicio/controller
###### Ver en api:
http://localhost:3000/ejercicio/3



### Ejercicio 4
Se desarrollo un nuevo endpoint llamado enviame el cual acepta el metodo post y se puede enviar data,  en caso de que no se envie una data se envia una data por default esta se encuentra en el archivo 
`api/component/envio/controller.js`

 http://localhost:3000/envio/5
utilize el mismo patron de diseño que en el ejercicio 2 , y utilizo la inyeccion de dependencia en lugar de apuntar a la base de datos apunto a un servicio externo a mi sistema.

### Ejercicio 5
Utilize una formula matematica generica de la sucession de fibonacci, ya que utilizando bucles no era la forma mas optima de encontrar la sucession,
se puede calcular el divisor de un numero entero utilizando sus factores primos el cual devuelve el resto de su division.
Factor primo ejemplo:

[![NUMEROS_PRIMOS](https://yosoytuprofe.20minutos.es/wp-content/uploads/2019/11/descomponer-en-factres-primos.png "NUMEROS_PRIMOS")](http://https://yosoytuprofe.20minutos.es/wp-content/uploads/2019/11/descomponer-en-factres-primos.png "NUMEROS_PRIMOS")

entra en un bucle infinito hasta encontrar un numero que tenga mil divisores, este es un proceso muy largo ya que requiere una gran capacidad de computo.
Realizar la busqueda de los factores primos en numeros muy grande, conlleva a un gran procesamiento de computo, por lo tanto tratar de encontre un numero en la suceccion de fibonacci, puede tardar una gran cantidad de tiempo.



###### logica de negocio:
 /api/components/ejercicio/controller
###### Ver en api:
http://localhost:3000/ejercicio/5


### Ejercicio 6
Analizando la problematica entendi que sigue el mismo patron de la sucession de fibonacci en el cual cuando va de un numero aleatorio entre 1 a 20 que serian los rangos deduzco que sigue la sucesion de fibonacci, para hacer este ejercicio recicle la funcion de fibonnaci previamente utilizada en el ejercicio 5


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
