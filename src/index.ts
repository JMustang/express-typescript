import express from "express";
import userRouter from "./routes/users";

const app = express();

app.use("/api/users", userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
