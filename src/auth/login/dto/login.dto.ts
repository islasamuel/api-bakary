import { ApiProperty } from "@nestjs/swagger";

export class LoginDTO {
    @ApiProperty()
    usuario:string;

    @ApiProperty()
    password: string;
}
