import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SubCategoriaService } from './sub-categoria.service';
import { SubCategoriaDTO } from './dto/sub-categoria.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('sub-categoria')
@ApiTags('sub-categoria')
export class SubCategoriaController {
  constructor(private readonly subCategoriaService: SubCategoriaService) { }

  @Post()
  async create(@Body() data: SubCategoriaDTO) {
    const finded = await this.subCategoriaService.findByNombre(data.nombre);
    if (finded.length > 0)
      return { success: false, message: 'Ya existe una sub categoria con el mismo nombre', data: finded };

    const created = await this.subCategoriaService.create(data);
    return { success: true, message: 'Información guardada correctamente', data: created };
  }

  @Get(':id')
  findByCategoria(@Param('id') id: string,) {
    return this.subCategoriaService.findByCategoria(id);
  }



  @Put(':id')
  update(@Param('id') id: string, @Body() data: SubCategoriaDTO) {
    return this.subCategoriaService.update(id, data);
  }

}
