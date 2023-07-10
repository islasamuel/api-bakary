import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";

export type CategoriaDocument = HydratedDocument<Categoria>;

@Schema({ collection: 'categorias', versionKey: false })
export class Categoria {
    @Prop({ required: true, unique: true })
    nombre: string;
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);

