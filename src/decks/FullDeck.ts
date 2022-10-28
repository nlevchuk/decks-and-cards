import { DeckBase } from './interfaces/deckBase.interface';
import { CardValue } from '../cards/enums/values.enum';

const allValues = [
  CardValue.ACE,
  CardValue.KING,
  CardValue.QUEEN,
  CardValue.JACK,
  CardValue.TEN,
  CardValue.NINE,
  CardValue.EIGHT,
  CardValue.SEVEN,
  CardValue.SIX,
  CardValue.FIVE,
  CardValue.FOUR,
  CardValue.THREE,
  CardValue.TWO,
];

export class FullDeck implements DeckBase {
  getAvailableValues(): CardValue[] {
    return allValues;
  }
}
