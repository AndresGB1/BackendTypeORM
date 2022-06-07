import { Router } from "express";
import { getItem, getItems, createItem, updateItem, deleteItem } from "../controllers/Item.controllers";

const router = Router();
/**
 * @swagger
 * components: 
 *  schemas:
 *      Items:
 *          type: object
 *          properties:
 *           id:
 *              type: number
 *           purchase:
 *              type: number
 *           product:
 *              type: number
 *         
 *          required:
 *           - purchaseId
 *           - productId
 *          example:
 *           id: 12
 *           purchaseId: 12
 *           productId: 12
 * 
 *  parameters:
 *   ItemsId:
 *     in: path
 *     name: id
 *     required: true
 *     schema:
 *       type: number
 *     description: the Items id
 */


/**
 * @swagger
 * tags:
 *  name: Items
 *  description: Items endpoint
 */
/**
 * @swagger
 * /api/item/:
 *  get:
 *   summary: Use to get all Items
 *   tags: [Items]
 *   responses:
 *    '200':
 *     description: A successful list of Items
 *    content:
 *     application/json:
 *       schema:
 *         type: array
 *       items:
 *         $ref: '#/components/schemas/Items'
 *   '500':
 *     description: Server error
 */
router.get("/", getItems);

/**
 * @swagger
 * /api/item/{id}:
 *  get:
 *   summary: Use to get a ProductPurchases by id
 *   tags: [Items]
 *   parameters:
 *     - $ref: '#/components/parameters/ItemsId'
 *   responses:
 *     '200':
 *       description: A successful Item
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/Items'
 *     '404':
 *       description: User not found
 *     '500':
 *       description: Server error
 */
router.get("/:id", getItem);

/**
 * @swagger
 * /api/item/:
 *  post:
 *   summary: Use to create a Items
 *   tags: [Items]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Items'
 *   responses:
 *    '201':
 *      description: A successful Item created
 *    '500':
 *      description: Server error
 *    '400':
 *      description: Bad request
 */ 
router.post("/", createItem);

/**
 * @swagger
 * /api/item/{id}:
 *    put:
 *     summary: Use to update a user
 *     tags: [Items]
 *     parameters:
 *      - $ref: '#/components/parameters/ItemsId'
 *     content:
 *      application/json:
 *        schema:
 *          $ref: '#/components/schemas/Items'
 *     responses:
 *       '200':
 *        description: A successful Items updated
 *       '500':
 *        description: Server error
 */
router.put("/:id", updateItem);

/**
 * @swagger
 * /api/item/{id}:
 *   delete:
 *    summary: Use to delete a Items
 *    tags: [Items]
 *    parameters:
 *     - $ref: '#/components/parameters/ItemsId'
 *    responses:
 *     '200':
 *       description: A successful Item deleted
 *     '500':
 *       description: Server error
 *     '404':
 *       description: Item not found
 */ 
router.delete("/:id", deleteItem);
    

export default router;