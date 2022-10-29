import { IsNotEmpty, IsUUID } from 'class-validator';

export class DrawCardsInputDto {
  @IsUUID()
  @IsNotEmpty()
  deckId: string;

  count: number;
}
