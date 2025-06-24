import express from 'express';
import router from './router';
import db from './config/db';
import color from 'colors';
import cors, {CorsOptions} from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();


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


//Permitir conexiones desde cualquier origen
const corsOptions : CorsOptions = {
  origin: function(origin, callback) {
    console.log(color.blue(process.env.FRONTEND_URL));
    console.log("origin", origin); 
     
   if(origin === process.env.FRONTEND_URL ){ // Permite conexiones desde el frontend
    callback(null, true);
   }else{
    callback(new Error('Not allowed by CORS'));
   }
  } // Permite todas las conexiones{
  
}

server.use(cors(corsOptions)); //Permite conexiones desde cualquier origen
server.use(express.json()); //Permite la lectura de datos en formato JSON
server.use(morgan('dev')); //Permite ver las peticiones que se realizan al servidor
server.use('/api/products', router);



export default server;