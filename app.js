import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import usersRouter from "./src/routes/users.js";

mongoose.connect('mongodb+srv://eldad5900:eldad5900@barthletics.efe3zxk.mongodb.net/test', () => console.log("API Connected to MongoDB"));
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});

const app = express();
const PORT = 3000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`API Server Started at http://localhost:${PORT}/`);
  });

app.use("/Login",usersRouter);


