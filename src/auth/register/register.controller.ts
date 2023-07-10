import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterService } from './register.service';
import { ApiTags } from '@nestjs/swagger';
import { UsuarioDTO } from './dto/usuario.dto';

@Controller('auth/register')
@ApiTags('auth')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }

  @Post()
  async create(@Body() data: UsuarioDTO) {
    const created = await this.registerService.register(data);
    return { success: true, message: 'Información guardada correctamente', data: created };
  }

}
