import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import mealRoutes from './routes/menu.js';
import tablesRoutes from './routes/tables.js';
import mysql from 'mysql';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); 

app.use('/menu', mealRoutes);
app.use('/tables', tablesRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
            .catch((error) => console.log(error.message));

export const db = mysql.createPool({
    host: 'hostaddress',
    port: 3306,
    user: 'u',
    password: 'p',
    database: 'cuisineDB',
});
