import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardBuilder } from './CardBuilder';
import { CardShuffler } from './CardShuffler';
import { CardFormatter } from './CardFormatter';
import { CardCounter } from './CardCounter';
import { Card } from './card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardBuilder, CardShuffler, CardCounter, CardFormatter],
  exports: [CardBuilder, CardShuffler, CardCounter, CardFormatter],
})
export class CardsModule {}
