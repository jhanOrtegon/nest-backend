import { IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsNumber()
  readonly price: number;
}
