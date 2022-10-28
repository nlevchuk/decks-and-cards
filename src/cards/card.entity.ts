import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CardValue } from '../cards/enums/values.enum';
import { CardSuit } from '../cards/enums/suits.enum';
import { Deck } from '../decks/deck.entity';

@Entity({ name: 'cards' })
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @Column()
  suit: string;

  @Column()
  order: number;

  @ManyToOne(() => Deck, (deck) => deck.cards)
  deck: Deck;
}
