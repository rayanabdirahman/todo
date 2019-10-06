import Joi from '@hapi/joi';
import { ISignUpModel } from './../../domain/interfaces';

export default class UserValidator {
  public static signUp(signUpModel: ISignUpModel): Joi.ValidationResult<any> {
    return this.signUpSchema.validate(signUpModel);
  }

  private static signUpSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().min(2).required(),
    password: Joi.string().min(8).required()
  });  
}