import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerController } from './controllers/customer.controller';
import { CustomersService } from './services/customer.service';
import { Customer } from './entities/customer.entity';
import { UsersService } from './services/user.service';
import { UsersController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';

import { ProductsModule } from './../products/products.module';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controller';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([User, Customer, Order, OrderItem]),
  ],
  controllers: [CustomerController, UsersController, OrdersController],
  providers: [CustomersService, UsersService, OrdersService],
})
export class UsersModule {}
