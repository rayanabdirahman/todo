import express from 'express';
import { router as user }  from './api/user.route';
import connectToDbClient from './data_access/db_client';

const app = express();

// connect to DB client
connectToDbClient();

// middleware
app.use(express.json()) // express body parser

export default app;