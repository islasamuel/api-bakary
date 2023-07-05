import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
          ? `.${process.env.NODE_ENV}.env`
          : '.development.env',
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
