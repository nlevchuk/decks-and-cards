import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import { DeckBuilder } from './DeckBuilder';
import { DeckFormatter } from './DeckFormatter';
import { CardsModule } from '../cards/cards.module';
import { Deck } from './deck.entity';
import { Card } from '../cards/card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deck, Card]), CardsModule],
  controllers: [DecksController],
  providers: [DecksService, DeckBuilder, DeckFormatter],
})
export class DecksModule {}
