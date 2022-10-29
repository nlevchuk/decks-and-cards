import { IsNotEmpty, IsUUID } from 'class-validator';

export class OpenDeckInputDto {
  @IsUUID()
  @IsNotEmpty()
  deckId: string;
}
