import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDecimal()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  description: string;
}
