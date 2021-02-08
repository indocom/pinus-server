import express from "express";

import { User } from "../handlers";

const usersRouter = express.Router();

usersRouter.get("/", User.indexUser);
usersRouter.post("/", User.createUser);
usersRouter.get("/:uid", User.getUser);
usersRouter.put("/:uid", User.updateUser);
usersRouter.delete("/:uid", User.deleteUser);

export default usersRouter;
