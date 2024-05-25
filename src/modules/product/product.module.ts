import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product/product.entity';
import { UserController } from 'src/controller/user/user.controller';
import { UserService } from 'src/service/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
