import { ApiProperty } from "@nestjs/swagger";

export class CategoriaDTO {
    @ApiProperty({ required: true })
    nombre: string;
}
