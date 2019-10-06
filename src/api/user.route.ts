import express from 'express';
import UserController from '../controller/user/user.controller';

const router = express.Router();
const userController = new UserController();

router.post('/signUp', userController.signUp);

export { router };