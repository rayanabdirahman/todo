import express from 'express';
import User from '../../data_access/model/user.model';
import { ISignUpModel } from '../../domain/interfaces';
import UserValidator from './user.validation';


export default class UserController {

  /**
   * User registration method
   * @param {Express.Request} req - stores request object
   * @param {Express.Response} res - stores response object 
   */
  public signUp(req: express.Request, res: express.Response) {

    // stores passed in user fields from request body
    const signUpModel: ISignUpModel = {
      ...req.body
    };

    // check if request body is valid
    const validity = UserValidator.signUp(signUpModel);
    if (validity.error) {
      const { message } = validity.error;
      return res.status(402).json({ error: message });
    }



    // res.send({"hello": "world22"})
  }
}