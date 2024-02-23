import { IImageRepository } from "../../application/interfaces/image.port";
import { Image } from "../../domain/Image";
import { Prisma } from "../database";

export class ImageAdapter extends Prisma implements IImageRepository {
   
    async save(image: Image): Promise<Image> {
        return this.prisma.image.create({ data: {
            url: image.url,
            dataImage: image.dataImage,
            createdAt: new Date(),
            updatedAt: new Date()
        } });
    }

    async getAll(): Promise<Image[]> {
        return this.prisma.image.findMany();
    }
}