import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from "mongoose";
import { Categoria } from 'src/categoria/schema/categoria.schema';

export type SubCategoriaDocument = HydratedDocument<SubCategoria>;

@Schema({ collection: 'sub-categorias', versionKey: false })
export class SubCategoria {
    @Prop({ required: true, unique: true })
    nombre: string;

    @Prop({ required: true, ref: Categoria.name, type: Types.ObjectId })
    categoria:Categoria
}

export const SubCategoriaSchema = SchemaFactory.createForClass(SubCategoria);

