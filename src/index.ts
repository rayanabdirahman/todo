import express from 'express';
import logger from './lib/logger';

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => logger.info(`Running on PORT: ${PORT}`));