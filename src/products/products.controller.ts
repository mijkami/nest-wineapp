import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ProductsService} from "./products.service";
import {CreateProductDto} from "../dtos/products-create.dto";
import {ApiBearerAuth, ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";
import {Roles} from "../decorators/roles.decorator";
import {RolesGuard} from "../guards/auth.guard";
import {UpdateProductQteDto} from "../dtos/product-update-qte.dto";
import {HoldProductDto} from "../dtos/product-hold.dto";
import {FileInterceptor} from "@nestjs/platform-express";

// All elements after /products are protected with JwtAuthGuard
@ApiBearerAuth()
@ApiTags('products')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({summary: 'Get all products'})
  @Get('/getAll')
  async getAllProducts() {
   return this.productsService.getAllProducts();
  }

  @ApiOperation({summary: 'Get one product with its ID'})
  @Roles('salle')
  @Get('/getOne/:id')
  async getOneProducts(@Param('id') id:string) {
    return this.productsService.getOneProduct(id);
  }

  @ApiOperation({summary: 'Hold one product with its ID'})
  @Roles('salle')
  @Put('/hold/:id')
  async holdOneProduct(@Param('id') id : string, @Body() holdProduct: HoldProductDto) {
    return this.productsService.holdOneProduct(id, holdProduct);
  }

  @ApiOperation({summary: 'Add one product'})
  @Roles('econome')
  @Post('/add')
  @ApiBody({ type: [CreateProductDto] })
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.addProduct(createProductDto);
  }

  @ApiOperation({summary: 'Update quantity of one product with its ID'})
  @Roles('salle')
  @Put('/updateQte/:id')
  async updateQteProduct(@Param('id') id: string, @Body() productQte: UpdateProductQteDto) {
    return this.productsService.updateQteProduct(id, productQte);
  }

  @ApiOperation({summary: 'Update one product with its ID'})
  @Roles('econome')
  @Put('/update/:id')
  async updateProduct(@Param('id') id: string, @Body() updateProduct: CreateProductDto) {
    return this.productsService.updateProduct(id, updateProduct);
  }

  @ApiOperation({summary: 'Remove one product with its ID'})
  @Roles('econome')
  @Delete('/remove/:id')
  async deleteProduct(@Param('id') id) {
    return this.productsService.removeProduct(id);
  }

  @ApiOperation({summary: 'Upload a bottle image to the back end'})
  @Post('/uploadBottleImg/:id')
  @UseInterceptors(FileInterceptor('file', { dest: './public/images/bottleImg' }))
  uploadBottle(@UploadedFile() file, @Param('id') id: string) {
    console.log(file);
    console.log(file.filename);
    let filetype = (file.mimetype).split('/')[1]
    let fullfilepath = {product_img: "/" + file.filename + "." + filetype}
    return this.productsService.uploadBottleImg(id, fullfilepath);
  }
  @ApiOperation({summary: 'Upload a label image to the back end'})
  @Post('/uploadLabelImg/:id')
  @UseInterceptors(FileInterceptor('file', { dest: './public/images/labelImg' }))
  uploadLabel(@UploadedFile() file, @Param('id') id: string) {
    console.log(file);
    console.log(file.filename);
    let filetype = (file.mimetype).split('/')[1]
    let fullfilepath = {label_img: "/" + file.filename + "." + filetype}
    return this.productsService.uploadLabelImg(id, fullfilepath);
  }
}
