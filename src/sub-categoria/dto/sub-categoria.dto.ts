import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class SubCategoriaDTO {
    @ApiProperty({ required: true })
    nombre: string;

    @ApiProperty({ required: true })
    categoria: Types.ObjectId;

}
