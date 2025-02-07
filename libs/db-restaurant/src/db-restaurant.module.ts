import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5433,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'test_db',
      entities: [User],
      synchronize: true, // ⚠️ NO USAR EN PRODUCCIÓN
    }),
    TypeOrmModule.forFeature([User]), // Importa la entidad en el módulo
  ],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService],
})
export class DbRestaurantModule {}
