import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";

export type EmpresaDocument = HydratedDocument<Empresa>;

@Schema({ collection: 'empresas', versionKey: false })
export class Empresa {
    @Prop({ required: true, unique: true })
    nombre: string;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);

