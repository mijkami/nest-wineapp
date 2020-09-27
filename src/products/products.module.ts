import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "../schemas/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema}])
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
