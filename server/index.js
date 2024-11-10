import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import dbConnection from './database/db.js';

const app = express();
const port = 3000;

app.use(cors());
dbConnection();

app.use('/', router);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})