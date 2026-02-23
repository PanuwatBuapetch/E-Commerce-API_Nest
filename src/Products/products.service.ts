import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm'; // ใช้ DataSource เพื่อรัน SQL

@Injectable()
export class ProductsService {
  constructor(private dataSource: DataSource) {}

  // ดึงข้อมูลสินค้าทั้งหมด
  async getProductsFromDB() {
    const sql = 'SELECT * FROM products'; 
    return await this.dataSource.query(sql);
  }

  async getProductById(id: number){
    const sql = 'SELECT * FROM products WHERE id = $1';
    return await this.dataSource.query(sql, [id]);
  }

  // ดึงข้อมูล User (ลองเพิ่มเล่นๆ เพราะเห็นในรูปคุณมีตาราง users)
  async getUsersFromDB() {
    return await this.dataSource.query('SELECT * FROM users');
  }
}