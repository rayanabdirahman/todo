import express from 'express';
import connectToDbClient from './data_access/db_client';

const app = express();

// connect to DB client
connectToDbClient();

export default app;