import e, { Router } from "express";
import { signup,signin } from "../controllers/Auth.controllers";
const router = Router();
/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth endpoint
 */

/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *   summary: Use to create a user
 *   tags: [Auth]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *       schema:
 *           type: object
 *           properties:
 *            name:
 *              type: string
 *            money:
 *              type: number
 *            password:
 *              type: string
 *   responses:
 *    '201':
 *      description: A successful user created
 *    '500':
 *      description: Server error
 *    '400':
 *      description: Bad request
 */ 
router.post("/signup", signup);
/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *   summary: Use to login a user
 *   tags: [Auth]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *       schema:
 *           type: object
 *           properties:
 *            name:
 *              type: string
 *            password:
 *              type: string
 *   responses:
 *    '201':
 *      description: A successful user created
 *    '500':
 *      description: Server error
 *    '400':
 *      description: Bad request
 */ 
router.post("/signin", signin);

export default router;