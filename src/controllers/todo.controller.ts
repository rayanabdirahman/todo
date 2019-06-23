import { Request, Response } from "express";

export const list = (req: Request, res: Response) => {
  return res.send({ todo: "list" });
};

export const completed = (req: Request, res: Response) => {
  return res.send({ todo: "completed" });
};

export const add = (req: Request, res: Response) => {
  return res.send({ todo: "add" });
};

export const remove = (req: Request, res: Response) => {
  return res.send({ todo: "remove" });
};

export const update = (req: Request, res: Response) => {
  return res.send({ todo: "update" });
};

export const done = (req: Request, res: Response) => {
  return res.send({ todo: "done" });
};
