import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateProductDto} from "../dtos/products-create.dto";
import {Products} from "../schemas/products.schema";
import {InjectModel} from "@nestjs/mongoose";
import {ProductsInterface} from "../interfaces/products.interface";
import {Model} from "mongoose";
import {UpdateProductQteDto} from "../dtos/product-update-qte.dto";
import {HoldProductDto} from "../dtos/product-hold.dto";
import {UpdateProductPictureDto} from "../dtos/product-update-picture.dto";
import {UpdateProductLabelDto} from "../dtos/product-update-label.dto";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products.name) private readonly productModel: Model<ProductsInterface>) {}

  async getAllProducts() {
    return this.productModel.find();
  }

  async getOneProduct(id: string) {
    const returnedProduct = this.productModel.findById(id).exec();
    if (returnedProduct) {
      return returnedProduct;
    } else {
      throw new HttpException({
        status: HttpStatus.NO_CONTENT,
        error: 'Ce produit n\'existe pas'
      }, HttpStatus.NO_CONTENT);
    }
  }

  async holdOneProduct(id: string, holdProduct: HoldProductDto): Promise<CreateProductDto | string> {
    let canHold = false;
    await this.productModel.findById(id, (err, product) => {
      if(product.quantity > holdProduct.hold) {
        canHold = true;
      }
    })
    return canHold
      ? this.productModel.findByIdAndUpdate(id, holdProduct)
      : "Nombre de bouteilles à garder plus important que le nombre total de bouteilles" ;
  }

  async addProduct(createProductDto: CreateProductDto) {
    const findProduct = await this.productModel
      .findOne({
        brand_name: createProductDto.brand_name,
        year: createProductDto.year,
        color: createProductDto.color
      })
      .select('_id')
      .lean();
    if(findProduct == null) {
      const createdProduct = new this.productModel(createProductDto);
      return createdProduct.save();
    } else {
      throw new HttpException({
        status: HttpStatus.CONFLICT,
        error: 'Le produit existe déjà'
      }, HttpStatus.CONFLICT);
    }
  }

  async updateQteProduct(id: string, productQte: UpdateProductQteDto) {
    return this.productModel.findByIdAndUpdate(id, productQte);
  }

  async updateProduct(id: string, updateProductDto: CreateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto);
  }

  async removeProduct(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  async uploadBottleImg(id: string, UpdateProductPictureDto: UpdateProductPictureDto) {
    return this.productModel.findByIdAndUpdate(id, UpdateProductPictureDto);
  }

  async uploadLabelImg(id: string, UpdateProductLabelDto: UpdateProductLabelDto) {
    return this.productModel.findByIdAndUpdate(id, UpdateProductLabelDto);
  }

}
