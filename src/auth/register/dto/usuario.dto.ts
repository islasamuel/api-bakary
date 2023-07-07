import { ApiProperty } from "@nestjs/swagger";

export class UsuarioDTO {
    @ApiProperty({ required: true })
    nombre: string;

    @ApiProperty({ required: true })
    usuario: string;

    @ApiProperty({ required: true })
    password: string;
}
