// import { Image } from "@prisma/client";
import { Image } from "../../domain/Image";
import { IImageRepository } from "../interfaces/image.port";

export class ImageService {
    constructor(private repository: IImageRepository) {}

    async save(image: Image): Promise<Image> {
        return this.repository.save(image);
    }

    async getAll(): Promise<Image[]> {
        return this.repository.getAll();
    }
}