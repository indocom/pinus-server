import express from "express";

import { Sample } from "@handlers";

const sampleDbRouter = express.Router();

/**
 * @openapi
 * /sample/:
 *  get:
 *    tags:
 *      - Sample
 *    summary: Lists samples
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/IndexSampleApiResponse'
 */
sampleDbRouter.get("/", Sample.indexSample);

/**
 * @openapi
 * /sample/:
 *  post:
 *    tags:
 *      - Sample
 *    summary: Creates a sample
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SampleCreationData'
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateSampleApiResponse'
 */
sampleDbRouter.post("/", Sample.createSample);

/**
 * @openapi
 * /sample/{id}:
 *  get:
 *    tags:
 *      - Sample
 *    summary: Retrieves a sample
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetSampleApiResponse'
 */
sampleDbRouter.get("/:id", Sample.getSample);

/**
 * @openapi
 * /sample/{id}:
 *  put:
 *    tags:
 *      - Sample
 *    summary: Updates a sample
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SampleCreationData'
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateSampleApiResponse'
 */
sampleDbRouter.put("/:id", Sample.updateSample);

/**
 * @openapi
 * /sample/{id}:
 *  delete:
 *    tags:
 *      - Sample
 *    summary: Deletes a sample
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteSampleApiResponse'
 */
sampleDbRouter.delete("/:id", Sample.deleteSample);

export default sampleDbRouter;
