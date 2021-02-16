import { ApiResponse } from "../response";
import { UserService } from "../../services";

/**
 * @openapi
 * components:
 *  schemas:
 *    UserResponse:
 *      allOf:
 *        - $ref: '#/components/schemas/ApiResponse'
 *        - properties:
 *            data:
 *              $ref: '#/components/schemas/User'
 */
type UserResponse = ApiResponse<UserService.User>;

/**
 * @openapi
 * components:
 *  schemas:
 *    UsersResponse:
 *      allOf:
 *        - $ref: '#/components/schemas/ApiResponse'
 *        - properties:
 *            data:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
type UsersResponse = ApiResponse<UserService.User>;

/**
 * @openapi
 * components:
 *  schemas:
 *    IndexUserApiResponse:
 *      $ref: '#/components/schemas/UsersResponse'
 */
export type IndexUserApiResponse = UsersResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserApiResponse:
 *      $ref: '#/components/schemas/UserResponse'
 */
export type CreateUserApiResponse = UserResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    GetUserApiResponse:
 *      $ref: '#/components/schemas/UserResponse'
 */
export type GetUserApiResponse = UserResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateUserApiResponse:
 *      $ref: '#/components/schemas/UserResponse'
 */
export type UpdateUserApiResponse = UserResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteUserApiResponse:
 *      $ref: '#/components/schemas/UserResponse'
 */
export type DeleteUserApiResponse = UserResponse;
