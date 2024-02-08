import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeormconfig } from './config/typeorm.config';
import { ProductModule } from './Product/Product.module';
@Module({
  imports: [
  TypeOrmModule.forRoot(typeormconfig),
  AuthModule,
  ProductModule
  ],
})
export class AppModule {}
