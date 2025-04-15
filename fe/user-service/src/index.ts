import express from 'express';
import userRoutes from './presentation';

const app = express();
const PORT = 3000;

app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
