import { PrismaClient } from '@prisma/client';

export abstract class Prisma {

    protected prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }   
}