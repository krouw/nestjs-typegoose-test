import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductService } from './product.service';
import Product from './product.schema';

@Module({
  imports: [TypegooseModule.forFeature([Product])],
  providers: [ProductService],
})
export class ProductModule {}
