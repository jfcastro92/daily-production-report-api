import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserEntity } from './entities/user/user.entity';
import { RolModule } from './modules/rol/rol.module';
import { RolEntity } from './entities/rol/rol.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'hortonmills',
      entities: [UserEntity, RolEntity],
      synchronize: true,
    }),
    UserModule,
    RolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
