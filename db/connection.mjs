import knex from 'knex'
import path from 'path';
import { fileURLToPath } from "url";
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = __dirname.replace('\\db', '');
dotenv.config({ path: path.join(__root, '.env') });

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        port: process.env.DB_PORT,
        password: process.env.PASSWORD,
        database: process.env.DB
    } 
    //connection: process.env.DATABASE
})

export default db