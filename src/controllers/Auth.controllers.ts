import { Request, Response } from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
//bcrypt

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, money, password } = req.body;
    const user = new User();
    user.name = name;
    user.money = money;
    user.password = password;
    await user.save();
    const token = jwt.sign(
      { id: user.id },
      process.env.token_secret || "TOKEN"
    );
    res.json(token);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};

export const signin = async (req: Request, res: Response) => {
  User.findOneBy({ name: req.body.name }).then((user) => {
    if (user) {
      if (user.password === req.body.password) {
        const token = jwt.sign(
          { id: user.id },
          process.env.token_secret || "TOKEN"
        );
        res.json(token);
      } else {
        res.status(401).json({ message: "Password incorrect" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
};
