import { Request, Response } from "express";
import { getErrorMessage } from "../utils/errors.util";
import jwt from "jsonwebtoken";
import { UserService } from "../services/user.service";
import { JWT_SECRET_KEY } from "../config";
import { ZodError } from "zod";
import bcrypt from "bcrypt";

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const createdUser = await UserService.register(req.body);

      if (!createdUser) {
        return res.status(409).send("User already exists");
      }

      const token = jwt.sign(
        { username: createdUser.username },
        JWT_SECRET_KEY,
        {
          expiresIn: "2 days",
        }
      );

      res
        .status(201)
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 172800,
        })
        .json({ message: "User created successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).send(error.errors);
      }
      return res.status(500).send(getErrorMessage(error));
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const password = req.body.password;

      const user = await UserService.login(req.body);
      console.log(user);
      console.log("password:", password);
      console.log("password hash:", user.password);

      const passwordCorrect =
        user === null ? false : await bcrypt.compare(password, user.password);

      if (!(user && passwordCorrect)) {
        return res
          .status(401)
          .json({ error: true, message: "invalid user or password" });
      }

      const token = jwt.sign({ username: user.username }, JWT_SECRET_KEY, {
        expiresIn: "2 days",
      });

      return res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 172800,
        })
        .json({ message: "Logged in successfully" });
    } catch (error) {}
  }
}
