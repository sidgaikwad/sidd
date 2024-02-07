import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeormconfig } from './config/typeorm.config';
@Module({
  imports: [
  TypeOrmModule.forRoot(typeormconfig),
  AuthModule
  ],
})
export class AppModule {}
