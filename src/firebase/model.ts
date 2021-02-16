/**
 * @openapi
 * components:
 *  schemas:
 *    FirebaseUser:
 *      type: object
 *      properties:
 *        uid:
 *          type: string
 *        displayName:
 *          type: string
 *        email:
 *          type: string
 */
export interface FirebaseUser {
  uid: string;
  displayName: string;
  email: string;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    FirebaseUserCreationData:
 *      type: object
 *      properties:
 *        displayName:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *          format: password
 */
export interface FirebaseUserCreationData {
  displayName: string;
  email: string;
  password: string;
}
