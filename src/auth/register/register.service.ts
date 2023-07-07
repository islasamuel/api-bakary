import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './schema/usuario.schema';
import { Model } from 'mongoose';
import { UsuarioDTO } from './dto/usuario.dto';
import { LoginDTO } from '../login/dto/login.dto';

@Injectable()
export class RegisterService {
  constructor(@InjectModel(Usuario.name) private model: Model<Usuario>) { }

  async register(data: UsuarioDTO): Promise<Usuario> {
    const createdCat = new this.model(data);
    return createdCat.save();
  }


  async login(data: LoginDTO): Promise<Usuario> {
    return await this.model.findOne({usuario:data.usuario, password:data.password})
  }

}
