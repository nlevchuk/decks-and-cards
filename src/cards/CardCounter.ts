import { Injectable } from '@nestjs/common';
import { Card } from './card.entity';

@Injectable()
export class CardCounter {
  countRemaining(cards: Card[]): number {
    return cards.length;
  }
}
