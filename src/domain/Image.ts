export class Image {
    constructor(
        public id: number | undefined, 
        public url: string,
        public dataImage: string, 
        public createdAt: Date,
        public updatedAt: Date
    ) {}
}