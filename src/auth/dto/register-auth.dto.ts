import { IsString, MaxLength, MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterAuthDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(8, { message: 'La contraseña debe ser mayor a 8 caracteres' })
  @MaxLength(20, { message: 'La contraseña debe ser menor a 20 caracteres' })
  password: string;
}
