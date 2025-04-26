import dotenv from 'dotenv';
dotenv.config(); // ✅ MUST be the very first line

console.log("MONGO_DB_URL from .env:", process.env.MONGO_DB_URL);
import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import dbConnection from './database/db.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
dbConnection();

app.use('/', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
