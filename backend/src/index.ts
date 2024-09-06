import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/user.routes";
import cookieParser from "cookie-parser";
import { JWT_SECRET_KEY, PORT } from "./config";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.json("Se viene PIGGY-BANK");
});

app.use("/user", router);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
