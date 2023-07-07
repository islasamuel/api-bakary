import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './schema/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }])
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports:[RegisterService]
})
export class RegisterModule { }
