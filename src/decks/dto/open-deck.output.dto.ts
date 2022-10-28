import { CreateDeckOutputDto } from './create-deck.output.dto';
import { Card } from '../../cards/card.entity';

export class OpenDeckOutputDto extends CreateDeckOutputDto {
  cards: Card[];
}
