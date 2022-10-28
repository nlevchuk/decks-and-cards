import { Card } from '../card.entity';
import { CardValue } from '../enums/values.enum';
import { CardSuit } from '../enums/suits.enum';

export const buildCard = (
  value: CardValue | string,
  suit: CardSuit | string,
  order: number,
): Card => {
  const card = new Card();
  card.value = value;
  card.suit = suit;
  card.order = order;

  return card;
};
