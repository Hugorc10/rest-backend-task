import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts(): string {
    return 'This action returns all products';
  }

  @Post()
  addProduct(@Body() newProduct: string): string {
    return newProduct;
  }

  @Patch()
  updateProduct(): string {
    return 'This action updates a product';
  }

  @Delete()
  deleteProduct(): string {
    return 'This action deletes a product';
  }
}
