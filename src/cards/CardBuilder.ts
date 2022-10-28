import { Injectable } from '@nestjs/common';
import { Card } from './card.entity';
import { CardValue } from './enums/values.enum';
import { CardSuit } from './enums/suits.enum';
import { buildCard } from './utils';

@Injectable()
export class CardBuilder {
  build(availableValues: CardValue[]): Card[] {
    const cards = [];

    const suits = Object.values(CardSuit);
    let order = 1;
    for (const suit of suits) {
      for (const value of availableValues) {
        const card = buildCard(value, suit, order);

        cards.push(card);
        order += 1;
      }
    }

    return cards;
  }

  reorder(cards: Card[]): Card[] {
    const newCards = [];

    let order = 1;
    for (const card of cards) {
      const { value, suit } = card;
      const newCard = buildCard(value, suit, order);
      newCards.push(newCard);

      order += 1;
    }

    return newCards;
  }
}
