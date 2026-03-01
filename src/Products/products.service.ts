import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm'; // ใช้ DataSource เพื่อรัน SQL

@Injectable()
export class ProductsService {
  constructor(private dataSource: DataSource) {}

  // ดึงข้อมูลสินค้าทั้งหมด
   async findAll() {
    return this.dataSource.query('SELECT * FROM products');
  }

  async findById(id: number) {
    return this.dataSource.query(
      'SELECT * FROM products WHERE id = $1',
      [id]
    );
  }
}
