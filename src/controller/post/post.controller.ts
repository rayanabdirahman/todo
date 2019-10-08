import express from 'express';
import { IPostModel } from '../../domain/interfaces';

export default class PostController {

  public createPost = async (req: express.Request, res: express.Response) => {
    try {
      const postModel: IPostModel = {
        ...req.body
      };

      

    } catch (error) {

    }
  }
}