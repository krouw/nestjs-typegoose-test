import { InjectModel } from 'nestjs-typegoose';
import { Injectable } from '@nestjs/common';
import { ModelType } from 'typegoose';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: ModelType<Product>,
  ) {}
}
