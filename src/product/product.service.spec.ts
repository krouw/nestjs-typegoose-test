import { Test, TestingModule } from '@nestjs/testing';

import Product from './product.schema';
import { ProductService } from './product.service';
import { TypegooseModule } from 'nestjs-typegoose';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypegooseModule.forFeature([Product])],
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
