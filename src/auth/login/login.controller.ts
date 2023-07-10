import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';
import { RegisterService } from '../register/register.service';

@Controller('auth/login')
@ApiTags('auth')
export class LoginController {
  constructor(private readonly service: RegisterService) { }

  @Get()
  async create(@Query() data: LoginDTO) {
    const usuario = await this.service.login(data);
    if (!usuario)
      return { success: false, message: 'El usuario o contraseña son incorrectos', data: null }
      
    return { success: true, message: 'Información correcta', data: { nombre: usuario.nombre, usuario: usuario.usuario } }
  }
}
