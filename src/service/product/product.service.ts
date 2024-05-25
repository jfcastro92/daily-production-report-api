import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product/product.entity';
import { CreateProductParams, UpdateProductParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  getProduct() {
    return this.productRepository.find();
  }

  createProduct(productDetails: CreateProductParams) {
    const newProduct = this.productRepository.create({
      ...productDetails,
      createdAt: new Date(),
    });
    return this.productRepository.save(newProduct);
  }

  updateProduct(id: number, updateProductDetails: UpdateProductParams) {
    return this.productRepository.update({ id }, { ...updateProductDetails });
  }

  deleteProduct(id: number) {
    return this.productRepository.delete(id);
  }
}
