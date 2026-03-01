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
    return await this.productsService.findAll();
  }

  // 🔴 2. ย้าย ":id" ไปไว้อันสุดท้ายของ Controller
  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productsService.findById(parseInt(id)); // ส่ง id ไปให้ Service จัดการต่อ
  }
}