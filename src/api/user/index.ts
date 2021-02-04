import express from "express";

import { createUser, indexUsers, getUser, updateUser, deleteUser } from "./user";

const usersRouter = express.Router();

usersRouter.get("/", indexUsers);
usersRouter.post("/", createUser);
usersRouter.get("/:uid", getUser);
usersRouter.put("/:uid", updateUser);
usersRouter.delete("/:uid", deleteUser);

export default usersRouter;
