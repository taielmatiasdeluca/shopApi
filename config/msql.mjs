import mysql from 'mysql';
import { ENV } from './config.mjs';
class Mysql {
    constructor() {
        const conn = mysql.createConnection({
            host: ENV.DB_HOST,
            user: ENV.DB_USER,
            password: ENV.DB_PASSWORD,
            database: ENV.DB_DATABASE,
            port: ENV.DB_PORT
        })

        conn.connect((err) => {
            if (err) {
                console.log(err)
            }

        })
        this.conexion = conn

    }
}

export default Mysql;