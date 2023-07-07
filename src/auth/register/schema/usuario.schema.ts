import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema({ collection: 'usuarios' })
export class Usuario {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true, unique: true })
    usuario: string;

    @Prop({ required: true })
    password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

