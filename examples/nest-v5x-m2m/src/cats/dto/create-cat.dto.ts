import { IsString } from 'class-validator';
export class CreateCatDTO {
  @IsString()
  public readonly name: string;
}
