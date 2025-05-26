import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DATA_BASE_URL!, {
    dialect: 'postgres',
    models: [__dirname + '/../models/**/*.ts'], // Path to your models
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default db;