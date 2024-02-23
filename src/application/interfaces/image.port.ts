import { Image } from "../../domain/Image";


export interface IImageRepository {
    save(image: Image): Promise<Image>;
    getAll(): Promise<Image[]>;
}