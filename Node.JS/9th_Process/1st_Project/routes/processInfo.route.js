import express from 'express';
import { getProcessInfo } from '../controllers/processInfo.controller.js';

const router = express.Router();

router.get('/process-info', getProcessInfo);

export default router;