import { DataSource } from "typeorm";
import { User } from "./models/User";
import { Product } from "./models/Product";
import { ProductPurchase } from "./models/ProductPurchase";
import { Item } from "./models/Item";

export const AppDataSource: DataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  entities: [User, Product, ProductPurchase,Item],
  synchronize: true,
  logging: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
