import { DataSourceOptions } from 'typeorm';
import { Deck } from './decks/deck.entity';
import { Card } from './cards/card.entity';

export default (): DataSourceOptions => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [Deck, Card],
});
