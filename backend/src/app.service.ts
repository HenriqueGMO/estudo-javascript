import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá';
  }
  getHello2(): object {
    return {
      id: 2,
      name: 'Henrique',
    };
  }
  soma(var1: any, var2: any): number {
    return parseInt(var1) + Number(var2);
  }
  mult(var3: any, var4: any): number {
    return parseInt(var3) * Number(var4);
  }
}
