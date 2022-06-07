import e, { Request, Response } from "express";
import { ProductPurchase } from "../models/ProductPurchase";

export const getProductPurchase = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productPurchase = await ProductPurchase.findOneBy({
      id: parseInt(id),
    });
    if (productPurchase) {
      res.status(200).json(productPurchase);
    } else {
      res.status(404).json({ message: "ProductPurchase not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
export const getProductPurchases = async (req: Request, res: Response) => {
  try {
    const productPurchases = await ProductPurchase.find();
    res.status(200).json(productPurchases);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
export const createProductPurchase = async (req: Request, res: Response) => {
  try {
    const { purchaseDate, total, user } = req.body;
    const productPurchase = new ProductPurchase();
    productPurchase.purchaseDate = purchaseDate;
    productPurchase.total = total;
    productPurchase.userId = user;
    await productPurchase.save();
    return res.json(productPurchase);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};
export const updateProductPurchase = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productPurchase = await ProductPurchase.findOneBy({
      id: parseInt(id),
    });
    if (productPurchase) {
      await ProductPurchase.update({ id: parseInt(id) }, req.body);
      return res.status(200).json(productPurchase);
    } else {
      return res.status(404).json({ message: "ProductPurchase not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};
export const deleteProductPurchase = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productPurchase = await ProductPurchase.findOneBy({
      id: parseInt(id),
    });
    if (productPurchase) {
      await ProductPurchase.delete({ id: parseInt(id) });
      return res.status(200).json({ message: "ProductPurchase deleted" });
    } else {
      return res.status(404).json({ message: "ProductPurchase not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};
