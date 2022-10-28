import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Deck } from '../decks/deck.entity';

@Entity({ name: 'cards' })
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  deckId: string;

  @Column()
  value: string;

  @Column()
  suit: string;

  @Column()
  order: number;

  @ManyToOne(() => Deck, (deck) => deck.cards)
  deck: Deck;
}
