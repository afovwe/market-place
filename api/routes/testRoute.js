import express from 'express';
import { getTestMessage } from '../controllers/testController.js'; // Import the controller

const router = express.Router();

// Use the controller function for the test route
router.get('/test', getTestMessage);

export default router;
