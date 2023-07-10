import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaDTO } from './dto/empresa.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('empresa')
@ApiTags('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) { }

  @Post()
  async create(@Body() data: EmpresaDTO) {
    const finded = await this.empresaService.findByNombre(data.nombre);
    if (finded.length > 0)
      return { success: false, message: 'Ya existe una empresa con el mismo nombre', data: finded };
      
    const created = await this.empresaService.create(data);
    return { success: true, message: 'Información guardada correctamente', data: created };
  }

  @Get()
  findAll() {
    return this.empresaService.findAll();
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() data: EmpresaDTO) {
    return this.empresaService.update(id, data);
  }

}
