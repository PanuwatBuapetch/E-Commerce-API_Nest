import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'สวัสดี NestJS ';
  }
  getWelcome(): string{
    return 'เจมส์บอนด์';
  }
}
