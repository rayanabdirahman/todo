import express from 'express';
import { IPostModel } from '../../domain/interfaces';

export default class PostController {

  /**
   * Create post method
   * @param {Express.Request} req - request object
   * @param {Express.Response} res - response object 
   */
  public createPost = async (req: express.Request, res: express.Response) => {
    try {
      const postModel: IPostModel = {
        ...req.body
      };

      

    } catch (error) {}
  }
}