import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardBuilder } from './CardBuilder';
import { CardShuffler } from './CardShuffler';
import { Card } from './card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardBuilder, CardShuffler],
  exports: [CardBuilder, CardShuffler],
})
export class CardsModule {}
