import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo.controller';

// แก้ไข 2 บรรทัดนี้ให้ตรงกับชื่อโฟลเดอร์และชื่อไฟล์จริง
import { ProductsController } from './Products/products.controller'; 
import { ProductsService } from './Products/products.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ecommerce_db',
      synchronize: false,
    }),
  ],
  controllers: [AppController, TodoController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}