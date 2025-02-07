import { Test, TestingModule } from '@nestjs/testing';
import { DbRestaurantService } from './db-restaurant.service';

describe('DbRestaurantService', () => {
  let service: DbRestaurantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbRestaurantService],
    }).compile();

    service = module.get<DbRestaurantService>(DbRestaurantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
