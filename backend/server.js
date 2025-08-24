import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import recipeRoutes from './routes/recipeRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());





const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
})
.catch(err => console.log('MongoDB connection error:', err));


app.use('/api/recipes', recipeRoutes);
