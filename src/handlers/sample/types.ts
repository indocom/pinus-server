import { ApiResponse } from "../response";
import { SampleService } from "../../services";

/**
 * @openapi
 * components:
 *  schemas:
 *    SampleResponse:
 *      allOf:
 *        - $ref: '#/components/schemas/ApiResponse'
 *        - properties:
 *            data:
 *              $ref: '#/components/schemas/Sample'
 */
type SampleResponse = ApiResponse<SampleService.Sample>;

/**
 * @openapi
 * components:
 *  schemas:
 *    SamplesResponse:
 *      allOf:
 *        - $ref: '#/components/schemas/ApiResponse'
 *        - properties:
 *            data:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Sample'
 */
type SamplesResponse = ApiResponse<SampleService.Sample[]>;

/**
 * @openapi
 * components:
 *  schemas:
 *    IndexSampleApiResponse:
 *      $ref: '#/components/schemas/SamplesResponse'
 */
export type IndexSampleApiResponse = SamplesResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateSampleApiResponse:
 *      $ref: '#/components/schemas/SampleResponse'
 */
export type CreateSampleApiResponse = SampleResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    GetSampleApiResponse:
 *      $ref: '#/components/schemas/SampleResponse'
 */
export type GetSampleApiResponse = SampleResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateSampleApiResponse:
 *      $ref: '#/components/schemas/SampleResponse'
 */
export type UpdateSampleApiResponse = SampleResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteSampleApiResponse:
 *      $ref: '#/components/schemas/SampleResponse'
 */
export type DeleteSampleApiResponse = SampleResponse;
