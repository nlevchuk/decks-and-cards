import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Card } from '../cards/card.entity';

@Entity({ name: 'decks' })
export class Deck {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  shuffled: boolean;

  @OneToMany(() => Card, (card) => card.deck, {
    cascade: true,
  })
  cards: Card[];
}
