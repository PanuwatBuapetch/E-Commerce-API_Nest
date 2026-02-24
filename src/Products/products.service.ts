import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm'; // ใช้ DataSource เพื่อรัน SQL

@Injectable()
export class ProductsService {
  constructor(private dataSource: DataSource) {}

  // ดึงข้อมูลสินค้าทั้งหมด
  async getProductsFromDB() {
    const sql = 'SELECT * FROM products';
    return await this.dataSource.query(sql);
  }

  async getProductById(id: string) {
    const productId = parseInt(id); // แปลงจาก string เป็นตัวเลข

    if (isNaN(productId)) {
      throw new BadRequestException('ID สินค้าต้องเป็นตัวเลขเท่านั้น');
    }

    const query = 'SELECT * FROM products WHERE id = $1';
    const result = await this.dataSource.query(query, [productId]);

    if (result.length === 0) {
      throw new BadRequestException('ไม่พบสินค้าที่ระบุ');
    }

    return result[0]; // ส่งกลับแค่ object เดียว
  }
  // ดึงข้อมูล User (ลองเพิ่มเล่นๆ เพราะเห็นในรูปคุณมีตาราง users)
  async getUsersFromDB() {
    return await this.dataSource.query('SELECT * FROM users');
  }
}
