import mongoose from 'mongoose';
import config from 'config';
import logger from '../utils/logger'


async function connect(){
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
    logger.info('DB is connected');
    } catch (err) {
    logger.error("Couldn't connect to database");
    process.exit(1);
    }
}
// not asynchronous connection
// return mongoose.connect(dbUri)
// .then(()=> {
//     console.log('Connected to database');
// })
// .catch((error)=> {
// console.error('Could not connect to database', error);
// process.exit(1);
// })
export default connect
