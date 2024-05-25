import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolController } from 'src/controller/rol/rol.controller';
import { RolEntity } from 'src/entities/rol/rol.entity';
import { RolService } from 'src/service/rol/rol.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity])],
  controllers: [RolController],
  providers: [RolService],
})
export class RolModule {}
