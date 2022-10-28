import { Deck } from '../deck.entity';
import { Card } from '../../cards/card.entity';
import { DeckType } from '../enums/types.enum';

export const buildDeck = (
  type: DeckType,
  shuffled: boolean,
  cards: Card[],
): Deck => {
  const deck = new Deck();
  deck.type = type;
  deck.shuffled = shuffled;
  deck.cards = cards;

  return deck;
}
