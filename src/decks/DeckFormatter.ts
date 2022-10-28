import { Injectable } from '@nestjs/common';
import { CardFormatter } from '../cards/CardFormatter';
import { CardCounter } from '../cards/CardCounter';
import { Card } from '../cards/card.entity';
import { CreateDeckOutputDto } from './dto/create-deck.output.dto';
import { OpenDeckOutputDto } from './dto/open-deck.output.dto';

@Injectable()
export class DeckFormatter {
  constructor(
    private cardFormatter: CardFormatter,
    private cardCounter: CardCounter,
  ) {}

  formatCreatedDeck({ id, type, shuffled, cards }): CreateDeckOutputDto {
    return {
      deckId: id,
      type,
      shuffled,
      remaining: this.cardCounter.countRemaining(cards),
    };
  }

  formatOpenedDeck({ id, type, shuffled, cards }): OpenDeckOutputDto {
    return {
      deckId: id,
      type,
      shuffled,
      remaining: this.cardCounter.countRemaining(cards),
      cards: cards.map(this.cardFormatter.format),
    };
  }
}
