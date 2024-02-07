import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
@Module({
  imports: [
  // TypeOrmModule.forRoot({
  //   type: 'postgres',
  //   host: 'localhost',
  //   port: 5050,
  //   username: 'postgres',
  //   password: 'admin',
  //   database: 'devrental',
  //   entities: [],
  //   synchronize: true,
  // }),
  AuthModule,
  CustomerModule
  ],
})
export class AppModule {}
