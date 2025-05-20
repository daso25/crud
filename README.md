# crud
CRUD  /  Express - NodeJS, TS, React, PostgreSQL
REST API

1. CREAR EL PACKAGE.JSON

npm init en el server

Este es un proyecto donde se usan handlers como arquitectura ya que es un proyecto simple

2. INSTALAR TS NODE

Se deben instalar dependencias para poder trabajar con TS (npm i -D typescript ts-node)
Se debe instalar una dependencias para que ejecute Node cada que exista un cambio

3. INSTALAR NODEMON
   
en scripts el test se cambia por dev y el valor sera npx ts-node src/index.ts
sin embargo debe instalarse nodemon para hacer un watch constante npm i -D nodemon

Y ahora el valor de dev no sera npx ts-node src/index.ts sino nodemon --exec ts-node src/index.ts

para compila de TS a JS -> se crea el tsconfig y se corre el comando npx tsc para ejecutarse


4. INSTALAR EXPRESS

npm i express
npm i -D @types/express -> este solo se usa cuando se trabaja con TS



6. CONEXIÓN A DB DESDE EXPRESS
   
instalar Sequalize -> Documentacion: https://sequelize.org/docs/v6/getting-started/

para PostgreSQL: 
npm install --save sequelize

En la carpeta config se crea un archivo el cual llamamos db.ts -> aqui va la configuración de la conexion a la BD pero la conexion se hace en el server

Para usar .env files es recomendado usar dotenv:
npm i dotenv


7. CREANDO MODELOS
   
Los modelos son la iteración con la base de datos, basicamente es la estrucutra de la tabla de la BD

Debemos instalar: npm i sequelize-typescript
Los modelos se nombran con mayuscula: Product.model.ts, Categoria.model.ts

8. CREANDO ROUTER
    
Creamos los handlers para no tener toda la logica dentro del router, los handlers son pequeñas funciones que llamamos en otros archivos, en este caso en el Router

Instalar Express Validator: npm i express-validator  

9. TESTING
    
Instalando supertest y jest: npm i -D supertest @types/supertest jest @types/jest ts-jest

Crear archivo jest.config: npx ts-jest config:init


usando super test

correr el coverage npm run test:coverage y en el packjson despues del test , "test:coverage": "jest --detectOpenHandles --coverage"


=======================CONSIDERACIONES IMPORTANTES==========================

