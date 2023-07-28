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
  mult(var1: any, var2: any): number {
    return parseInt(var1) * Number(var2);
  }
  subt(var1: any, var2: any): number {
    return parseInt(var1) - Number(var2);
  }
  divis(var1: any, var2: any): number {
    return parseInt(var1) / Number(var2);
  }
}
