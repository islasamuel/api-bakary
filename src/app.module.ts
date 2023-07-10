import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmpresaModule } from './empresa/empresa.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SubCategoriaModule } from './sub-categoria/sub-categoria.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    
    MongooseModule.forRoot(process.env.DB_CONNECTION),
    
    EmpresaModule,
    
    CategoriaModule,
    
    SubCategoriaModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
