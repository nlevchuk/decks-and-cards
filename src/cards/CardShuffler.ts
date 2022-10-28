import { Injectable } from '@nestjs/common';
import { shuffle } from 'lodash';
import { Card } from './card.entity';
import { CardBuilder } from './CardBuilder';

@Injectable()
export class CardShuffler {
  constructor(private cardBuilder: CardBuilder) {}

  shuffle(cards: Card[]): Card[] {
    const shuffledCards = shuffle(cards);

    return this.cardBuilder.reorder(shuffledCards);
  }
}
