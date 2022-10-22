import express from 'express';
import logger from './utils/logger';
import config from 'config';
import connect from './utils/connect'
import routes from './routes/routes';
import  deserializedUser from './middleware/deserializedUser';

const port = config.get<number>('port');
// Express
const app = express();
// middleware for request body
app.use(express.json());
app.use(deserializedUser);
// routes
// app.use('/home', require('./routes/guestRoutes'))
// port 
app.listen(port, async ()=> {
    logger.info('listening on port ' + port);
    await connect();
    routes(app);
})
// const port = process.env.PORT || 8080;
// app.listen(port, () => log.info('listening on port ' + port));