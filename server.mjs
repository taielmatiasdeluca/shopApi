import { configDotenv } from 'dotenv'
import app from './app.mjs';

const ENV = configDotenv().parsed;

const server = app.listen(ENV.PORT, () => {
    console.log(`Server listening on: ${ENV.PORT}`)
})


export default server;
