import express from 'express';
import router from './router';
import db from './config/db';
import color from 'colors';


//Conectar a la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(color.magenta('Connection has been established successfully.'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDB();

const server = express();

server.use('/api/products', router);
server.use(express.json());


export default server;