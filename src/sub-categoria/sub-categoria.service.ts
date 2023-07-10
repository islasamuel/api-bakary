import { Injectable } from '@nestjs/common';
import { SubCategoriaDTO } from './dto/sub-categoria.dto';
import { SubCategoria } from './schema/sub-categoria.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubCategoriaService {
  constructor(@InjectModel(SubCategoria.name) private model: Model<SubCategoria>) { }


  create(data: SubCategoriaDTO) {
    const created = new this.model(data);
    return created.save();
  }

  findByCategoria(categoria: string) {
    return this.model.find({ categoria: categoria }).populate('categoria', 'nombre');
  }

  findByNombre(nombre: string) {
    const regex = new RegExp(nombre, 'i');
    return this.model.find({ nombre: regex })
  }


  update(id: string, data: SubCategoriaDTO) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
  }


}
