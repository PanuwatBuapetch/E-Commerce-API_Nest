import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // 1. นำเข้า Swagger
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. ตั้งค่าการแสดงผล Swagger
  const config = new DocumentBuilder()
    .setTitle('My First NestJS API')
    .setDescription('รายละเอียด API ของฉัน')
    .setVersion('1.0')
    .addTag('cats') // สามารถเปลี่ยนแท็กตามชอบ
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' คือ path ที่จะเข้าดูหน้าเว็บ

  await app.listen(3001); // รันที่พอร์ต 3001
  console.log(`Application is running on: http://localhost:3001`);
  console.log(`Swagger UI is available at: http://localhost:3001/api`);
}
bootstrap();