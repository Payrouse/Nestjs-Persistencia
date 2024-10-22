import { Module } from '@nestjs/common';

import { CustomerController } from './controllers/customer.controller';
import { CustomersService } from './services/customer.service';
import { UsersService } from './services/user.service';
import { UsersController } from './controllers/user.controller';
import { ProductsModule } from './../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
