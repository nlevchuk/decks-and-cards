import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DecksModule } from './decks/decks.module';
import { CardsModule } from './cards/cards.module';
import getDataSourceConfig from './data-source.config';

@Module({
  imports: [
    DecksModule,
    CardsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getDataSourceConfig()),
  ],
})
export class AppModule {}
