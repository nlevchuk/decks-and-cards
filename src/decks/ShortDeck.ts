import { DeckBase } from './interfaces/deckBase.interface';
import { CardValue } from '../cards/enums/values.enum';

const excludeFromSixToTwo = [
  CardValue.ACE,
  CardValue.KING,
  CardValue.QUEEN,
  CardValue.JACK,
  CardValue.TEN,
  CardValue.NINE,
  CardValue.EIGHT,
  CardValue.SEVEN,
];

export class ShortDeck implements DeckBase {
  getAvailableValues(): CardValue[] {
    return excludeFromSixToTwo;
  }
}
