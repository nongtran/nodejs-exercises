// Express controllers and routes for user-related operations.
import express from 'express';

const router = express.Router();

router.get('/users', (req, res) => {
    res.send('List of users');
});

export default router;
