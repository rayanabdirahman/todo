import express from "express";
import * as todo from "../controllers/todo.controller";

const router = express.Router();

router.get("/", todo.list);

router.get("/completed", todo.completed);

router.get("/add", todo.add);

router.get("/remove", todo.remove);

router.get("/update", todo.update);

router.get("/done", todo.done);

export default router;
