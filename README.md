# Proyecto final - CoderHouse - Segunda entrega parcial.
---------------------------------------------------------

## Descripción

El objetivo principal de esta entrega es realizar un DAO para seleccionar por medio de variable de entorno que tipo de persistencia utilizar para la aplicación.
Dependiendo de lo seleccionado en el archivo .env es el tipo de persistencia que se va a utilizar en la app.
En este caso vamos a poder seleccionar entre MariaDB y MongoDB Atlas.
La aplicación tiene una API REST para poder trabajar con la información y luego una parte de front end para consumir dicha API.
Ahora están funcionando los endpoint de getAll y save.

| Método  | Endpoint     | Descripción  |
| ------- | -------------| ------------ |
| GET | /api/producto | Permite recuperar todos los productos |
| POST | /api/producto | Permite crear un nuevo producto |
| GET | /api/usuario | Permite recuperar todos los usuarios |
| POST | /api/usuario | Permite crear un nuevo usuario |
| GET | / | Ruta default para probar express-handlebars |

