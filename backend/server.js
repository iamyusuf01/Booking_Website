import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import databaseConnect from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

//App Config
const app = express();
const PORT = process.env.PORT || 4000

//Database Connect
databaseConnect();
connectCloudinary();

//Middleware
app.use(express.json());
app.use(cors());

//Api Service
app.get('/', (req, res) => {
    res.send('API is running...');
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))