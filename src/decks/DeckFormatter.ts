import { Injectable } from '@nestjs/common';
import { CardFormatter } from '../cards/CardFormatter';
import { CardCounter } from '../cards/CardCounter';

@Injectable()
export class DeckFormatter {
  constructor(
    private cardFormatter: CardFormatter,
    private cardCounter: CardCounter,
  ) {}

  formatCreatedDeck({ id, type, shuffled, cards }): {} {
    return {
      deckId: id,
      type,
      shuffled,
      remaining: this.cardCounter.countRemaining(cards),
    };
  }
}
