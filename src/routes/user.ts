import express from "express";

import { Auth, User } from "@handlers";

const usersRouter = express.Router();

usersRouter.use(Auth.ensureLoggedIn);

/**
 * @openapi
 * /users/:
 *  get:
 *    tags:
 *      - Users
 *    summary: Lists users
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/IndexUserApiResponse'
 */
usersRouter.get("/", User.indexUser);

/**
 * @openapi
 * /users/:
 *  post:
 *    tags:
 *      - Users
 *    summary: Creates a user
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserCreationData'
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserApiResponse'
 */
usersRouter.post("/", User.createUser);

/**
 * @openapi
 * /users/{uid}:
 *  get:
 *    tags:
 *      - Users
 *    summary: Retrieves a user
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetUserApiResponse'
 */
usersRouter.get("/:uid", User.getUser);

/**
 * @openapi
 * /users/{uid}:
 *  put:
 *    tags:
 *      - Users
 *    summary: Updates a user
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserCreationData'
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateUserApiResponse'
 */
usersRouter.put("/:uid", User.updateUser);

/**
 * @openapi
 * /users/{uid}:
 *  delete:
 *    tags:
 *      - Users
 *    summary: Deletes a user
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteUserApiResponse'
 */
usersRouter.delete("/:uid", User.deleteUser);

export default usersRouter;
