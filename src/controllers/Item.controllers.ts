import { Request, Response } from "express";
import { Item } from "../models/Item";

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await Item.findOneBy({ id: parseInt(id) });
    if (item) {
      console.log(item);
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
export const createItem = async (req: Request, res: Response) => {
  try {
    const { purchaseId,productId } = req.body;
    const item = new Item();
    item.product = productId;
    item.purchase = purchaseId;
    await item.save();
    return res.json(item);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};
export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await Item.findOneBy({ id: parseInt(id) });
    if (item) {
      await Item.update({ id: parseInt(id) }, req.body);
      return res.status(200).json(item);
    } else {
      return res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await Item.findOneBy({ id: parseInt(id) });
    if (item) {
      await Item.delete({ id: parseInt(id) });
      return res.status(200).json({ message: "Item deleted" });
    } else {
      return res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};
