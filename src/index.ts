import express from 'express';
import authRoutes from './routes/AuthRoute';
import userRoutes from './routes/UserRoute';
import 'dotenv/config'

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/login', authRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
