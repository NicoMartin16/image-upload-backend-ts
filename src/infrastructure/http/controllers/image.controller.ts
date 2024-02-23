import express from 'express';

import { ImageService } from "../../../application/services/image.service";
import { Image } from '../../../domain/Image';
import { json } from 'stream/consumers';



export class ImageController {

    constructor(private readonly imageService: ImageService) {}


    async save(req: express.Request, res: express.Response) {

        if(!req.file) {
            res.status(400).json({ message: 'Image is required' });
        }

        if(req.file) {
            const newImage: Image = {
                id: 1, // Add id property
                url: req.file?.path, // Update the type of url property
                dataImage: Buffer.from(JSON.stringify(req.file)).toString('base64'), // Update the type of data property
                createdAt: new Date(), // Add createdAt property
                updatedAt: new Date() // Add updatedAt property
            }
            const image = await this.imageService.save(newImage);
            // Update the type of req and res
            res.status(201).json({
                message: 'image created',
                status: 200,
                data: image
            });
        }
        
    }

    async getAll(req: express.Request, res: express.Response) {
        const images = await this.imageService.getAll();

        if (images.length === 0) {
            res.status(404).json({ message: 'Images not found' });
        }
        
        res.status(200).json(images);
    }
}