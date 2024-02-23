import express from 'express';
import ImagesRoutes from './images.routes';

const router = express.Router();

router.use('/images', ImagesRoutes);

export default router;