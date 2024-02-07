import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Authresopitory } from './auth.repository';

@Module({
    controllers: [AuthController],
    providers: [AuthService, Authresopitory]
})
export class AuthModule {}
