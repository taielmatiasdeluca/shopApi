import app from './app.mjs';
import { ENV } from './config/config.mjs';

const server = app.listen(ENV.PORT, () => {
    console.log(`Server listening on: ${ENV.PORT}`)
})


export default server;
