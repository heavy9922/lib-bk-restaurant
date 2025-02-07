import { Module } from '@nestjs/common';
import { DbRestaurantModule } from '@app/db-restaurant';
import { UsersController } from './app.controller';

@Module({
  imports: [DbRestaurantModule],
  controllers: [UsersController]
})
export class AppModule {}
