import User from './../data_access/model/user.model';
import { ISignUpModel } from '../domain/interfaces';

export default class UserService {
  public async signUp(model: ISignUpModel) {
    const user = new User(model);

    // register user to database
    await user.save();

    return user;
  }
}