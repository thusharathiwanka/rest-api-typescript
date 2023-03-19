import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true }));
app.use(cookieParser());

app.get('/', (_, res) =>
  res.status(200).json({ message: 'REST API with Typescript' })
);

mongoose
  .connect(MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
  )
  .catch((e) => console.log(e.message));
