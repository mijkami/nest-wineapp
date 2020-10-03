import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ProductsService} from "./products.service";
import {CreateProductDto} from "../dtos/products-create.dto";
import {ApiBody} from "@nestjs/swagger";

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/getAll')
  async getAllProducts() {
   return this.productsService.getAllProducts();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/getOne')
  async getOneProducts(@Body() id:string) {
    return this.productsService.getOneProduct(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/add')
  @ApiBody({ type: [CreateProductDto] })
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.addProduct(createProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/remove')
  async deleteProduct(@Body() _id: string) {
    return this.productsService.removeProduct(_id);
  }

}
