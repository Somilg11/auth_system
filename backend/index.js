import express from 'express';
import dbConnect from './db/dbconnect.js';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.route.js';

dbConnect();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})