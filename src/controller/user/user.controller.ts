import express from 'express';
import { ISignUpModel } from '../../domain/interfaces';
import UserValidator from './user.validation';
import UserService from '../../service/user.service';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  /**
   * User registration method
   * @param {Express.Request} req - stores request object
   * @param {Express.Response} res - stores response object 
   */
  public signUp = async (req: express.Request, res: express.Response) => {
    try {
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

      // register user to database
      const user = await this.userService.signUp(signUpModel);

      res.status(200).json({
        status: 'success',
        data: user
      });

    } catch(error) {
      return res.status(500).json({error});
    }
  }
}