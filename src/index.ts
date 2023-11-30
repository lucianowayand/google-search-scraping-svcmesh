import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = process.env.PORT || 8080;

const prisma = new PrismaClient();

app.get("/prisma", async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  return res.json(users);
});

app.get("/", (_req: Request, res: Response) => {
  return res.json({ version: process.env.npm_package_version });
});

app.get("/hello", (_req: Request, res: Response) => {
  return res.json({ message: "Hello world!" });
});

app.listen(port, () => {
  return console.log(`Server is listening on http://localhost:${port}`);
});
