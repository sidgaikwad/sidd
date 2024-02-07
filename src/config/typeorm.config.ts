import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { users } from "src/auth/auth.entity";

export const typeormconfig : TypeOrmModuleOptions = {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'auth',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
}