import { Router } from "express";
import { getProductPurchase, getProductPurchases, createProductPurchase, updateProductPurchase, deleteProductPurchase } from "../controllers/ProductPurchase.controllers";

const router = Router();
/**
 * @swagger
 * components: 
 *  schemas:
 *      ProductPurchases:
 *          type: object
 *          properties:
 *           id:
 *             type: number
 *           purchaseDate:
 *             type: date
 *           total:
 *             type: number
 *           user:
 *             type: number
 *          required:
 *           - purchaseDate
 *           - total
 *           - user
 *          example:
 *           id: 12
 *           user: 2
 *           purchaseDate: "2020-01-01"
 *           total: 300000000
 * 
 *  parameters:
 *   ProductPurchasesId:
 *     in: path
 *     name: id
 *     required: true
 *     schema:
 *       type: number
 *     description: the ProductPurchases id
 */

/**
 * @swagger
 * tags:
 *  name: ProductPurchases
 *  description: ProductPurchases endpoint
 */
/**
 * 
/**
 * @swagger
 * /api/productpurchase/:
 *  get:
 *   summary: Use to get all ProductPurchases
 *   tags: [ProductPurchases]
 *   responses:
 *    '200':
 *     description: A successful list of ProductPurchases
 *    content:
 *     application/json:
 *       schema:
 *         type: array
 *       items:
 *         $ref: '#/components/schemas/ProductPurchases'
 *   '500':
 *     description: Server error
 */
router.get("/", getProductPurchases);

/**
 * @swagger
 * /api/productpurchase/{id}:
 *  get:
 *   summary: Use to get a ProductPurchase by id
 *   tags: [ProductPurchases]
 *   parameters:
 *     - $ref: '#/components/parameters/ProductPurchasesId'
 *   responses:
 *     '200':
 *       description: A successful ProductPurchase
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/ProductPurchases'
 *     '404':
 *       description: ProductPurchase not found
 *     '500':
 *       description: Server error
 */
router.get("/:id", getProductPurchase);

/**
 * @swagger
 * /api/productpurchase/:
 *  post:
 *   summary: Use to create a ProductPurchases
 *   tags: [ProductPurchases]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ProductPurchases'
 *   responses:
 *    '201':
 *      description: A successful ProductPurchases created
 *    '500':
 *      description: Server error
 *    '400':
 *      description: Bad request
 */ 
router.post("/", createProductPurchase);

/**
 * @swagger
 * /api/productpurchase/{id}:
 *    put:
 *     summary: Use to update a user
 *     tags: [ProductPurchases]
 *     parameters:
 *      - $ref: '#/components/parameters/ProductPurchasesId'
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/ProductPurchases'
 *     responses:
 *      '200':
 *        description: A successful ProductPurchases updated
 *      '500':
 *        description: Server error
 */
router.put("/:id", updateProductPurchase);

/**
 * @swagger
 * /api/productpurchase/{id}:
 *   delete:
 *    summary: Use to delete a ProductPurchases
 *    tags: [ProductPurchases]
 *    parameters:
 *      - $ref: '#/components/parameters/ProductPurchasesId'
 *    responses:
 *      '200':
 *          description: A successful ProductPurchases deleted
 *      '500':
 *          description: Server error
 *      '404':
 *          description: ProductPurchases not found
 */ 
router.delete("/:id", deleteProductPurchase);

export default router;