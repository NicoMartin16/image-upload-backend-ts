
import express from 'express';
import { ImageController } from '../controllers/image.controller';
import { ImageService } from '../../../application/services/image.service';
import { ImageAdapter } from '../../repositories/image.adapter';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

class ImageRoutes {

    public router: express.Router;
    private imageController: ImageController;

    constructor() {
        const imageRepository = new ImageAdapter();
        const imageService = new ImageService(imageRepository);
        this.imageController = new ImageController(imageService);
        this.router = express.Router();
        this.routes();
    }

    private routes() {
        this.router.get('/', this.imageController.getAll.bind(this.imageController));
        this.router.post('/',upload.single('image'), this.imageController.save.bind(this.imageController));
    }
}

export default new ImageRoutes().router;