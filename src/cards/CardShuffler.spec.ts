import { sortBy } from 'lodash';
import { CardShuffler } from './CardShuffler';
import { CardBuilder } from './CardBuilder';
import { Card } from './card.entity';
import { buildCard } from './utils';
import { CardValue } from './enums/values.enum';
import { CardSuit } from './enums/suits.enum';

describe('CardShuffler', () => {
  let cardShuffler: CardShuffler;
  let cards: Card[];

  beforeEach(() => {
    cardShuffler = new CardShuffler(new CardBuilder());
    cards = [
      buildCard(CardValue.ACE, CardSuit.CLUBS, 1),
      buildCard(CardValue.KING, CardSuit.CLUBS, 2),
      buildCard(CardValue.QUEEN, CardSuit.CLUBS, 3),
      buildCard(CardValue.JACK, CardSuit.CLUBS, 4),
      buildCard(CardValue.TEN, CardSuit.CLUBS, 5),
      buildCard(CardValue.NINE, CardSuit.CLUBS, 6),
    ];
  });

  describe('shuffle', () => {
    it('returns shuffled cards', () => {
      const shuffledCards = cardShuffler.shuffle(cards);

      expect(
        sortBy(shuffledCards, ['order'])
      ).not.toEqual(cards);
    });
  });
});
