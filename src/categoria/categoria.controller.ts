import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaDTO } from './dto/categoria.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('categoria')
@ApiTags('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @Post()
  async create(@Body() data: CategoriaDTO) {
    const finded = await this.categoriaService.findByNombre(data.nombre);
    if (finded.length > 0)
      return { success: false, message: 'Ya existe una categoria con el mismo nombre', data: finded };

    const created = await this.categoriaService.create(data);
    return { success: true, message: 'Información guardada correctamente', data: created };
  }

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() data: CategoriaDTO) {
    return this.categoriaService.update(id, data);
  }

}
