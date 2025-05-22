import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize('postgresql://crud_kvy8_user:M94L2snTxpmNk7CsRuF5OOFD9D9HHxzk@dpg-d0njtrhr0fns7394kslg-a.oregon-postgres.render.com/crud_kvy8?ssl=true')

export default db;