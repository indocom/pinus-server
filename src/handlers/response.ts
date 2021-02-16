import { BaseError } from "./error";

/**
 * @openapi
 * components:
 *  schemas:
 *    ApiResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        data:
 *          type: object
 *        error:
 *          $ref: '#/components/schemas/BaseError'
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: BaseError;
}
