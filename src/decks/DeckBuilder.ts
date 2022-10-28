import { Injectable } from '@nestjs/common';
import { DeckType } from './enums/types.enum';
import { CardShuffler } from '../cards/CardShuffler';
import { CardBuilder } from '../cards/CardBuilder';
import { FullDeck } from './FullDeck';
import { ShortDeck } from './ShortDeck';
import { Deck } from './deck.entity';
import { buildDeck } from './utils/buildDeck';

const deckTypesMap = {
  [DeckType.FULL]: FullDeck,
  [DeckType.SHORT]: ShortDeck,
};

@Injectable()
export class DeckBuilder {
  constructor(
    private cardBuilder: CardBuilder,
    private cardShuffler: CardShuffler,
  ) {}

  build(type: DeckType, shuffled: boolean): Deck {
    const Deck = deckTypesMap[type];
    const deck = new Deck();

    let cards = this.cardBuilder.build(deck.getAvailableValues());

    if (shuffled) {
      cards = this.cardShuffler.shuffle(cards);
    }

    return buildDeck(type, shuffled, cards);
  }
}
