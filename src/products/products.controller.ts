import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ProductsService} from "./products.service";
import {CreateProductDto} from "../dtos/products-create.dto";
import {ApiBody} from "@nestjs/swagger";
import {Roles} from "../decorators/roles.decorator";
import {RolesGuard} from "../guards/auth.guard";

// All elements after /products are protected with JwtAuthGuard
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/getAll')
  async getAllProducts() {
   return this.productsService.getAllProducts();
  }

  @Roles('salle')
  @Post('/getOne')
  async getOneProducts(@Body() id:string) {
    return this.productsService.getOneProduct(id);
  }

  @Roles('econome')
  @Post('/add')
  @ApiBody({ type: [CreateProductDto] })
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.addProduct(createProductDto);
  }

  @Roles('salle')
  @Put('/updateQte/:id')
  async updateQteProduct(@Param('id') id: string, @Body() productQte: number) {
    return this.productsService.updateQteProduct(id, productQte);
  }

  @Roles('econome')
  @Put('/update/:id')
  async updateProduct(@Param('id') id: string, @Body() updateProduct: CreateProductDto) {
    return this.productsService.updateProduct(id, updateProduct);
  }

  @Roles('econome')
  @Delete('/remove/:id')
  async deleteProduct(@Param('id') id) {
    return this.productsService.removeProduct(id);
  }

}
