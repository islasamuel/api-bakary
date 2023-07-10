import { Injectable } from '@nestjs/common';
import { EmpresaDTO } from './dto/empresa.dto';
import { Empresa } from './schema/empresa.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmpresaService {
  constructor(@InjectModel(Empresa.name) private model: Model<Empresa>) { }


  create(data: EmpresaDTO) {
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


  update(id: string, data: EmpresaDTO) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
  }


}
