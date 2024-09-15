import express from 'express';
import { addAddress, getAddresses, getProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/addresses', addAddress);
router.get('/addresses/:userId', getAddresses);
router.get('/profile/:userId', getProfile);

export default router;
