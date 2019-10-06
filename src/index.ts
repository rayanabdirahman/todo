import * as dotenv from 'dotenv';
dotenv.config(); // initialise .env file

import app from './app';
import logger from './lib/logger';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => logger.info(`Running on PORT: ${PORT}`));