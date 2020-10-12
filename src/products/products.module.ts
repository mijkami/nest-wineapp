import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Products, ProductsSchema} from "../schemas/products.schema";
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports: [
    // here use variable as it avoids mistyping errors
    MongooseModule.forFeature([{name: Products.name, schema: ProductsSchema}]),
    MulterModule.register({
      dest: './assets/img',
    })
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
