// import logger from 'pino';
import dayjs from 'dayjs';
const pino = require('pino');
const logger = pino({
    transport: {
        target: 'pino-pretty',
    },
    options: {
        translateTime: "SYS: dd-mm-yyyy HH:mm:ss",
        ignore: "pid,hostname"
    }
})
export default logger;