import { DeckType } from '../enums/types.enum';

export class CreateDeckOutputDto {
  deckId: string;
  type: DeckType;
  shuffled: boolean;
  remaining: number;
}
