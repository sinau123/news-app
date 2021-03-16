import { Injectable } from '@nestjs/common';
import { censorEmail } from './textUtil';

@Injectable()
export class AppService {
  getHello(): string {
    // return 'aa';
    return censorEmail('sinau1123@gmail.com');
  }
}
