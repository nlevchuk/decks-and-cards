import { Module } from '@nestjs/common';
import { CardBuilder } from './CardBuilder';
import { CardShuffler } from './CardShuffler';
import { CardFormatter } from './CardFormatter';
import { CardCounter } from './CardCounter';

@Module({
  providers: [CardBuilder, CardShuffler, CardCounter, CardFormatter],
  exports: [CardBuilder, CardShuffler, CardCounter, CardFormatter],
})
export class CardsModule {}
