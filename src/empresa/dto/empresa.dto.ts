import { ApiProperty } from "@nestjs/swagger";

export class EmpresaDTO {
    @ApiProperty({ required: true })
    nombre: string;
}
