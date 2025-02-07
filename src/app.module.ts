import { Module } from '@nestjs/common';
import { DbRestaurantModule } from '@app/db-restaurant';

@Module({
  imports: [DbRestaurantModule],
})
export class AppModule {}
