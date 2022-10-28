import { DeckType } from '../enums/types.enum';

export class CreateDeckDto {
  type: DeckType;
  shuffled: boolean;
}
