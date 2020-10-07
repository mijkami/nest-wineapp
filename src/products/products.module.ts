import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Products, ProductsSchema} from "../schemas/products.schema";

@Module({
  imports: [
    // here use variable as it avoids mistyping errors
    MongooseModule.forFeature([{name: Products.name, schema: ProductsSchema}])
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
