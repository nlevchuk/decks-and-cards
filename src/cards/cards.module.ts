import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardBuilder } from './CardBuilder';
import { CardShuffler } from './CardShuffler';
import { CardCounter } from './CardCounter';
import { Card } from './card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardBuilder, CardShuffler, CardCounter],
  exports: [CardBuilder, CardShuffler, CardCounter],
})
export class CardsModule {}
