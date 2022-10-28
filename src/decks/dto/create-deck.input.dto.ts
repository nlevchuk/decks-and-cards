import { DeckType } from '../enums/types.enum';

export class CreateDeckInputDto {
  type: DeckType;
  shuffled: boolean;
}
