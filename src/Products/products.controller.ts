import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'ดึงข้อมูลสินค้าทั้งหมดด้วย SQL' })
  async getAllProducts() {
    return await this.productsService.getProductsFromDB();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ดึงข้อมูลสินค้าตาม ID ด้วย SQL' })
  async getProductById(@Param('id') id: number) {
    return await this.productsService.getProductById(id);
  }

  @Get('users')
  @ApiOperation({ summary: 'ดึงข้อมูลผู้ใช้ทั้งหมดด้วย SQL' })
  async getAllUsers() {
    return await this.productsService.getUsersFromDB();
  }
}