import dotenv from "dotenv";
import express, { type Request, type Response } from "express";

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello world!", ${process.env.OPENAI_API_KEY}`);
});
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
