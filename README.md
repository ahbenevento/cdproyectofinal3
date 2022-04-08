# Proyecto final - CoderHouse - Segunda entrega parcial.

## Descripción

El objetivo principal de esta entrega es realizar un DAO para seleccionar por medio de variable de entorno que tipo de persistencia utilizar para la aplicación.
Dependiendo de lo seleccionado en el archivo .env es el tipo de persistencia que se va a utilizar en la app.
En este caso vamos a poder seleccionar entre MariaDB y MongoDB Atlas.
La aplicación tiene una API REST para poder trabajar con la información y luego una parte de front end para consumir dicha API.
Ahora están funcionando los endpoint de getAll y save. Luego voy a terminar el update y el delete de ambas persistencias.

| Método  | Endpoint     | Descripción  |
| ------- | -------------| ------------ |
| GET | /api/producto | Permite recuperar todos los productos |
| POST | /api/producto | Permite crear un nuevo producto |
| GET | /api/usuario | Permite recuperar todos los usuarios |
| POST | /api/usuario | Permite crear un nuevo usuario |
| GET | / | Ruta default para probar express-handlebars |

## Paquetes

Los aquetes utilizados hasta ahora son express, mongoose, sequelize, dotenv y mariadb. A futuro iré incorporando el resto para completar la entrega.

## Problemas

Estoy haciendo una divisón en capas del proyecto Controller - Routes - Service - Model para la entrega final futura. Con esta división y el DAO de la segunda entrega, no encuentro la forma de poder realizar una sola conexion a la base de datos de mariadb una única vez. Lo tuve que poner en cada Contenedor porque sino no le encontraba la vuelta. Asì funciona, pero seguramente no sea la mejor forma.
En cambio con mongoose, al momento de hacer el switch case para seleccionar la persistencia, hago la conexión a la base de datos.