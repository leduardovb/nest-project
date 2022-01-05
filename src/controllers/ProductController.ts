/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from 'src/models/Product';

@Controller('product')
export class ProductController {
  products: Product[] = [
    new Product(1, 'Abacate', 20.9),
    new Product(2, 'Pera', 20.9),
    new Product(3, 'Morango', 20.9),
    new Product(4, 'Tomate', 20.9),
    new Product(5, 'Uva', 20.9),
    new Product(6, 'Arroz', 20.9),
  ];

  @Get(':id')
  getProduct(@Param() params: { id: string }): Product {
    const id = Number(params.id);
    const product: Product = this.products.find(
      (product: Product) => product.cod === id,
    );
    return product;
  }

  @Get()
  getList(): Product[] {
    return this.products;
  }

  @Post()
  createProduct(@Body() product) {
    return product;
  }

  @Put()
  updateProduct(@Body() product) {
    return product;
  }

  @Delete(':id')
  deleteProduct(@Param() param) {
    return `Produto deletado ${param.id}`;
  }
}
