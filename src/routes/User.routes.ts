import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/User.controllers";

const router = Router();

/**
 * @swagger
 * components: 
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *           id:
 *              type: number
 *           name:
 *              type: string
 *           money:
 *              type: number
 *           password:
 *              type: string
 *          required:
 *           - name
 *           - money
 *           - password
 *          example:
 *              id: 12
 *              name: "John Doe"
 *              money: 300000000
 *              password: "contraseña123"
 * 
 *  parameters:
 *   userId:
 *     in: path
 *     name: id
 *     required: true
 *     schema:
 *       type: number
 *     description: the User id
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User endpoint
 */

/**
 * @swagger
 * /api/user/:
 *  get:
 *   summary: Use to get all users
 *   tags: [User]
 *   responses:
 *    '200':
 *     description: A successful list of users
 *    content:
 *     application/json:
 *       schema:
 *         type: array
 *       items:
 *         $ref: '#/components/schemas/User'
 *   '500':
 *     description: Server error
 */
router.get("/", getUsers);

//input id
/**
 * @swagger
 * /api/user/{id}:
 *  get:
 *   summary: Use to get a user by id
 *   tags: [User]
 *   parameters:
*     - $ref: '#/components/parameters/userId'
 *   responses:
 *     '200':
 *       description: A successful user
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/User'
 *     '404':
 *       description: User not found
 *     '500':
 *       description: Server error
 */
router.get("/:id", getUser);

/**
 * @swagger
 * /api/user/:
 *  post:
 *   summary: Use to create a user
 *   tags: [User]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 *   responses:
 *    '201':
 *      description: A successful user created
 *    '500':
 *      description: Server error
 *    '400':
 *      description: Bad request
 */ 
router.post("/", createUser);

/**
 * @swagger
 * /api/user/{id}:
 *    put:
 *     summary: Use to update a user
 *     tags: [User]
 *     parameters:
 *      - $ref: '#/components/parameters/userId'
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/User'
 *     responses:
 *      '200':
 *        description: A successful user updated
 *      '500':
 *        description: Server error
 */
router.put("/:id", updateUser);


/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *    summary: Use to delete a user
 *    tags: [User]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      '200':
 *        description: A successful user deleted
 *      '500':
 *        description: Server error
 *      '404':
 *        description: User not found
 */ 
router.delete("/:id", deleteUser);

export default router;
