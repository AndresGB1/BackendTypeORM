import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import UserRoutes from './routes/User.routes';
import ItemRoutes from './routes/Item.routes';
import ProductRoutes from './routes/Product.routes';
import  ProductPurchase  from './routes/ProductPurchase.routes';
import AuthRoutes from './routes/Auth.routes';

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { swaggerOptions } from './swaggerOptions';


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/api/user", UserRoutes);
app.use("/api/item", ItemRoutes);
app.use("/api/product", ProductRoutes);
app.use("/api/productpurchase", ProductPurchase);
app.use("/api/auth", AuthRoutes);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


export default app;