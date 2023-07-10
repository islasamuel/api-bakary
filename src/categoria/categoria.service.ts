import { Injectable } from '@nestjs/common';
import { CategoriaDTO } from './dto/categoria.dto';
import { Categoria } from './schema/categoria.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoriaService {
  constructor(@InjectModel(Categoria.name) private model: Model<Categoria>) { }


  create(data: CategoriaDTO) {
    const created = new this.model(data);
    return created.save();
  }

  findAll() {
    return this.model.find();
  }

  findByNombre(nombre: string) {
    const regex = new RegExp(nombre, 'i');
    return this.model.find({ nombre: regex })
  }

  update(id: string, data: CategoriaDTO) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
  }

}
