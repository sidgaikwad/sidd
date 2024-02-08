import { Module } from '@nestjs/common';
import { ProductController } from './Product.controller';
import { ProductService } from './Product.service';
import { ProductRepository } from './Product.repository';

@Module({
    controllers: [ProductController],
    providers: [ProductService, ProductRepository]
})
export class ProductModule {}
