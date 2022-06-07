import { Router } from "express";
import { getProduct, getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/Product.controllers";

const router = Router();
/**
 * @swagger
 * components: 
 *  schemas:
 *      Products:
 *          type: object
 *          properties:
 *           id:
 *             type: number
 *           name:
 *            type: string
 *           category:
 *            type: string
 *           price:
 *            type: number
 *           quantity:
 *            type: number
 *          required:
 *           - name
 *           - category
 *           - price
 *           - quantity
 *          example:
 *           id: 12
 *           name: "Product 1"
 *           category: "Category 1"
 *           price: 100000
 *           quantity: 2
 * 
 *  parameters:
 *   ProductsId:
 *     in: path
 *     name: id
 *     required: true
 *     schema:
 *       type: number
 *     description: the Product id
 */


/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Products endpoint
 */

/**
 * @swagger
 * /api/product/:
 *  get:
 *   summary: Use to get all Products
 *   tags: [Products]
 *   responses:
 *    '200':
 *     description: A successful list of Products
 *    content:
 *     application/json:
 *       schema:
 *         type: array
 *       items:
 *         $ref: '#/components/schemas/Products'
 *   '500':
 *     description: Server error
 */
router.get("/", getProducts);

/**
 * @swagger
 * /api/product/{id}:
 *  get:
 *   summary: Use to get a Product by id
 *   tags: [Products]
 *   parameters:
 *     - $ref: '#/components/parameters/ProductsId'
 *   responses:
 *     '200':
 *       description: A successful Product
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/Products'
 *     '404':
 *       description: Products not found
 *     '500':
 *       description: Server error
 */
router.get("/:id", getProduct);

/**
 * @swagger
 * /api/product/:
 *  post:
 *   summary: Use to create a Product
 *   tags: [Products]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Products'
 *   responses:
 *    '201':
 *      description: A successful Product created
 *    '500':
 *      description: Server error
 *    '400':
 *      description: Bad request
 */ 
router.post("/", createProduct);


/**
 * @swagger
 * /api/product/{id}:
 *    put:
 *     summary: Use to update a Product
 *     tags: [Products]
 *     parameters:
 *      - $ref: '#/components/parameters/ProductsId'
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/Products'
 *     responses:
 *      '200':
 *        description: A successful Product updated
 *      '500':
 *        description: Server error
 */
router.put("/:id", updateProduct);

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *    summary: Use to delete a Product
 *    tags: [Products]
 *    parameters:
 *      - $ref: '#/components/parameters/ProductsId'
 *    responses:
 *      '200':
 *          description: A successful Products deleted
 *      '500':
 *          description: Server error
 *      '404':
 *          description: Product not found
 */
router.delete("/:id", deleteProduct);

export default router;