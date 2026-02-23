import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('todos') // จัดกลุ่มใน Swagger
@Controller('todos')
export class TodoController {
  
  @Get()
  @ApiOperation({ summary: 'ดูรายการทั้งหมด' })
  findAll() {
    return [{ id: 1, title: 'เรียน NestJS', done: false }];
  }

  @Post()
  @ApiOperation({ summary: 'เพิ่มรายการใหม่' })
  create(@Body() data: { title: string }) {
    return { message: 'สร้างสำเร็จ!', data };
  }

  @Get(':id')
  @ApiOperation({ summary: 'ดูรายการตาม ID' })
  findOne(@Param('id') id: string) {
    return { id, title: `งานที่ ${id}`, done: false };
  }
}