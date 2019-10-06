import mongoose from 'mongoose';
import { ErrorMessage, SuccessMessage } from './../domain/enums';
import logger from '../lib/logger';

const MONGO_URI = `${process.env.DB_HOST}`

const connectToDbClient = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    logger.info(SuccessMessage.DB_CONNECTION);
    logger.debug(MONGO_URI)
  } catch (err) {
    logger.error(`${ErrorMessage.DB_CONNECTION}: ${err}`)
    logger.debug(MONGO_URI)
  }
};

export default connectToDbClient;