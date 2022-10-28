import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DecksService } from './decks.service';
import { DeckBuilder } from './DeckBuilder';
import { CardsModule } from '../cards/cards.module';
import { Deck } from './deck.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deck]), CardsModule],
  providers: [
    DecksService,
    DeckBuilder,
  ],
})
export class DecksModule {}
